import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

export interface Contact {
    name: string;
    email: string;
    phone: string;
    username: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}

  private contacts: Contact[] = [
    {name: "Leandro", email: "leandro.sorbo@gmail.com", phone: "11 94712-2944", username: "leandrosorbo"},
    {name: "Matheus", email: "matehus.fernandes@anhembi.br", phone: "13 99992-9999", username: "mcf1110"},
    {name: "Geovani", email: "geovanisilvaf1602@gmail.com", phone: "13 99992-2944", username: "geosf"},
    {name: "Renan", email: "remarozzi@hotmail.com", phone: "11 98304-4464", username: "RenanMarozzi"},
    {name: "Dudão", email: "dudao@ahembi.br", phone: "13 99999-9999", username: "orealdudao"},
    {name: "Douglas", email: "douglas.santana1777@gmail.com", phone: "11 98765-4321", username: "douglas1777"}
  ]
  
  public sortedContacts = this.contacts.sort((a, b) => a.name.localeCompare(b.name));


  public async showModal(contact: Contact) {
    const modal = await this.modalController.create({
      component: ContactDetailsComponent,
      componentProps: {
        contact: contact
      }
    });
    modal.present();
  }
}
