import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursosService } from '../../servicios/recursos.service';
import { Foto } from '../../interfaz/foto';

@Component({
  selector: 'app-cuadros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuadros.component.html',
  styleUrl: './cuadros.component.css'
})
export class CuadrosComponent implements OnInit {
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
