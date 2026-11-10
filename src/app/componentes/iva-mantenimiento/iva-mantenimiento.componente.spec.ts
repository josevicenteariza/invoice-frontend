import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvaMantenimientoComponente } from './iva-mantenimiento.componente';

describe('IvaMantenimientoComponente', () => {
  let component: IvaMantenimientoComponente;
  let fixture: ComponentFixture<IvaMantenimientoComponente>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IvaMantenimientoComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
