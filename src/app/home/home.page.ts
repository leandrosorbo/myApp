import { Component } from '@angular/core';

type DeliveryStatus = "preparing" | "onRoute" | "delivered" | "finished";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public grade = 5;
  public list = ["Helio", "Leandro", "Karen", "Natanael"];
  public list1: DeliveryStatus[] = ["preparing", "onRoute", "delivered", "finished"] ;
  public currentColor = "white";

  constructor() {}

  public adicionarPessoa(){
    this.list.push("Maria");
  }

}
