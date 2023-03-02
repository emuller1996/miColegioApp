import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAcudientesComponent } from './lista-acudientes.component';

describe('ListaAcudientesComponent', () => {
  let component: ListaAcudientesComponent;
  let fixture: ComponentFixture<ListaAcudientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAcudientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAcudientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
