import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarruselComponent } from './shared/carrusel/carrusel.component';
import { CuadrosComponent } from './shared/cuadros/cuadros.component';
import { TablaComponent } from './shared/tabla/tabla.component';


import { RecursosService } from './servicios/recursos.service';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent,FooterComponent, CarruselComponent, CuadrosComponent, TablaComponent, HttpClientModule],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private rescursosServices: RecursosService){
  }
  formData: any[] = [];

  handleFormSubmit(formData: any) {
    this.formData.push(formData);
  }
}