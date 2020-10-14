import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodFormComponent } from './components/food-form/food-form.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [FoodFormComponent],
  exports: [FoodFormComponent]
})
export class SharedModule { }
