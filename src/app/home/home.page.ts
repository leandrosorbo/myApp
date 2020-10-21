import { Component } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedDateString: string = new Date().toISOString();
  minDate: string = new Date().toISOString();
  maxDate: string = new Date().toISOString();

    constructor(public actionSheetController: ActionSheetController, private platform: Platform) {
this.platform.ready().then(() => {
let date: Date = new Date();
date.setDate(date.getDate() - 1);
this.minDate = date.toISOString();

date = new Date();
date.setDate(date.getDate() + 365);
this.maxDate = date.toISOString();


});

    }


    async selectLocation() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Locais',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Shopping Aricanduva',
          icon: 'location',
          handler: () => {
            console.log('Shopping Aricanduva');
          }
        }, {
          text: 'Shopping Mooca',
          icon: 'location',
          handler: () => {
            console.log('Shopping Mooca');
          }
        }, {
          text: 'Shopping Pátio Higienólis',
          icon: 'location',
          handler: () => {
            console.log('Shopping Pátio Higienólopis');
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        }]
      });
      await actionSheet.present();
    }
  }