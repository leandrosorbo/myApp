import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../shared/components/food-form/food-form.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  private foods: Food[] = [
    { id: 1, title: "X-Burguer", price: 12},
    { id: 2, title: "Hot-Dog", price: 8},
    { id: 3, title: "Espeto", price: 5},
  ];

  public food: Food;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.food = this.foods.find(f => f.id == +this.route.snapshot.paramMap.get("id"))
  }

  public handleSubmit(){
    console.log("Salvando", this.food);
  }

}
