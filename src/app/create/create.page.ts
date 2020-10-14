import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/components/food-form/food-form.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public newFood: Food = {
    id: 0,
    title: '',
    price: 0
  }

  constructor() { }

  ngOnInit() {
  }

  public handleFormSubmitted() {
    console.log("CRIANDO", this.newFood);
  }

}
