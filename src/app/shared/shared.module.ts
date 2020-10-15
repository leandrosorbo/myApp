import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactFormComponent } from './components/contact-form/contact-form.component';



@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ContactFormComponent],
  exports: [ContactFormComponent]
})
export class SharedModule { }
