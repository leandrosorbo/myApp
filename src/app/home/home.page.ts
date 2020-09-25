import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public mensagem = '';
  

  constructor(private alertController: AlertController) {  }


  public async showAlert(){
    this.alertController.create({
      header: "Promises são demais!",
      buttons: [
        {
          text: "Não!",
          handler: () => { this.mensagem = "Você é um fracassado!! :("; }
          },
        {
          text: "Sim!",
          handler: () => { this.mensagem = "Você é demais!!"; }
          }        
      ]
    }).then(a => a.present());
  }

}
