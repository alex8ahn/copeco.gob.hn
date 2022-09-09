import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ID } from '@directus/sdk';
import { directus } from 'src/app/services/directus';
import { formatRelativeTime } from 'shared/utils/format-relative-time';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {
  tiempo: Record<string, any> | null = null;
  moreTiempo: Record<string, any>[] | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    const id = this.route.snapshot.paramMap.get('id');

    let tiempoResponse;

    try {
      tiempoResponse = await directus.items('tiempo').readOne(id as ID, {
        fields: ['*', 'author.avatar', 'author.first_name', 'author.last_name'],
      });

      if (!tiempoResponse) {
        this.router.navigate(['404']);
        return;
      }

      const formattedTiempo = {
        ...tiempoResponse,
        publish_date: formatRelativeTime(
          new Date(tiempoResponse.publish_date)
        ),
      };

      const moreTiempoResponse = await directus.items('tiempo').readByQuery({
        fields: ['*', 'author.avatar', 'author.first_name', 'author.last_name'],
        filter: {
          _and: [
            { id: { _neq: tiempoResponse.id } },
            { status: { _eq: 'published' } },
          ],
        },
        limit: 2,
      });
      if (!moreTiempoResponse.data) {
        this.router.navigate(['404']);
        return;
      }
      const formattedMoretiempo = moreTiempoResponse.data.map(
        (moretiempo) => {
          return {
            ...moretiempo,
            publish_date: formatRelativeTime(
              new Date(moretiempo.publish_date)
            ),
          };
        }
      );

      this.tiempo = formattedTiempo;
      this.moreTiempo = formattedMoretiempo;
    } catch (err) {
      this.router.navigate(['404']);
    }
  }
}