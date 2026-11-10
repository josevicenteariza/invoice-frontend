import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logger } from './componentes/logger/logger';
import { IvaMantenimientoComponente } from './componentes/iva-mantenimiento/iva-mantenimiento.componente';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Logger, IvaMantenimientoComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { 
  protected readonly title = signal('Invoice');
}
