import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private alertController: AlertController) { }

  public async show(callback) {
    const alert = await this.alertController.create({
      header: "Tem certeza?",
      message: "Essa operação não poderá ser desfeita!",
      buttons: [{ text: "Confirmar", handler: () => callback()}, "Me enganei!"]
    });
    alert.present();
  }
}
