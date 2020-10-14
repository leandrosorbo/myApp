import { Component } from '@angular/core';
import { Food } from '../shared/components/food-form/food-form.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public foods: Food[] = [
    { id: 1, title: "X-Burguer", price: 12},
    { id: 2, title: "Hot-Dog", price: 8},
    { id: 3, title: "Espeto", price: 5},
  ];

  constructor() {}

}
