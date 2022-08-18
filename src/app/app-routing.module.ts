import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { VisionComponent } from './pages/vision/vision.component';
import { RegionalesComponent } from './pages/regionales/regionales.component';
import { ArticlePage } from './pages/article/article.component';
import { EstadoTiempoRepresasComponent } from './pages/estado-tiempo-represas/estado-tiempo-represas.component';



const routes: Routes = [
{path: '', component: HomePage},
{path: 'vision', component: VisionComponent},
{path: 'articles/:id', component: ArticlePage },
{path: 'regionales', component: RegionalesComponent},
{path: 'tiempo', component: EstadoTiempoRepresasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}