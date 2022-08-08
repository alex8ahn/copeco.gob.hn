import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoTiempoRepresasComponent } from './estado-tiempo-represas.component';

describe('EstadoTiempoRepresasComponent', () => {
  let component: EstadoTiempoRepresasComponent;
  let fixture: ComponentFixture<EstadoTiempoRepresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoTiempoRepresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoTiempoRepresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
