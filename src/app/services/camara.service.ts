import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class CamaraService {
  async tomarFoto(): Promise<string | undefined> {
    const imagen = await Camera.getPhoto({
      quality: 80,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });
    return imagen.dataUrl;
  }

  async elegirDeGaleria(): Promise<string | undefined> {
    const imagen = await Camera.getPhoto({
      quality: 80,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
    });
    return imagen.dataUrl;
  }
}