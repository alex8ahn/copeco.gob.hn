import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-tiempo-represas',
  templateUrl: './estado-tiempo-represas.component.html',
  styleUrls: ['./estado-tiempo-represas.component.scss']
})
export class EstadoTiempoRepresasComponent implements OnInit {
  title:string = "Estado del Tiempo Operaciones de Aeropuertos y Niveles de Represas" 

  constructor() { }

  ngOnInit(): void {
  }

}
