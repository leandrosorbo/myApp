import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../home/home.page';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  private contacts: Contact[] = [
    {name: "Leandro", email: "leandro.sorbo@gmail.com", phone: "11 94712-2944", username: "leandrosorbo"},
    {name: "Matheus", email: "matehus.fernandes@anhembi.br", phone: "13 99992-9999", username: "mcf1110"},
    {name: "Geovani", email: "geovanisilvaf1602@gmail.com", phone: "13 99992-2944", username: "geosf"},
    {name: "Renan", email: "remarozzi@hotmail.com", phone: "11 98304-4464", username: "RenanMarozzi"},
    {name: "Dudão", email: "dudao@ahembi.br", phone: "13 99999-9999", username: "orealdudao"},
    {name: "Douglas", email: "douglas.santana1777@gmail.com", phone: "11 98765-4321", username: "douglas1777"}
  ]
  
  public contact: Contact;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    this.contact = this.contacts.find(c => c.username === username);
  }

  public handleSave() {
    console.log(this.contact);
  }

}
