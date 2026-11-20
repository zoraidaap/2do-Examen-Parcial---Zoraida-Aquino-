import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonImg,
} from '@ionic/angular';
import { CamaraService } from '../services/camara.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg],
})
export class HomePage {
  fotoUrl?: string;
  mensajeError = '';

  constructor(private camaraService: CamaraService) {}

  async capturarFoto() {
    this.mensajeError = '';
    try {
      this.fotoUrl = await this.camaraService.tomarFoto();
    } catch {
      this.mensajeError = 'No se pudo abrir la cámara o se canceló la captura.';
    }
  }

  async abrirGaleria() {
    this.mensajeError = '';
    try {
      this.fotoUrl = await this.camaraService.elegirDeGaleria();
    } catch {
      this.mensajeError = 'No se pudo seleccionar la imagen de la galería.';
    }
  }
}