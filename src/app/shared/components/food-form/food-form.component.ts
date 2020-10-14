import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Food {
  id: number;
  title: string;
  price: number;
}

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss'],
})
export class FoodFormComponent implements OnInit {

  @Input() food: Food;
  @Output() formSubmitted = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
