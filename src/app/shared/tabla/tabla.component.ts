import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursosService } from '../../servicios/recursos.service';
import { Foto } from '../../interfaz/foto';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  fotos: Foto[] = [];

  constructor(private recursosService: RecursosService) {}

  ngOnInit() {
    this.recursosService.obtenerDatos().subscribe(
      fotos => {
        this.fotos = fotos;
      }
    );
  }
}
