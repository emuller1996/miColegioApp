import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAcudientesComponent } from './crear-acudientes.component';

describe('CrearAcudientesComponent', () => {
  let component: CrearAcudientesComponent;
  let fixture: ComponentFixture<CrearAcudientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAcudientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAcudientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
