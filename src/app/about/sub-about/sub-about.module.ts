import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubAboutPageRoutingModule } from './sub-about-routing.module';

import { SubAboutPage } from './sub-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubAboutPageRoutingModule
  ],
  declarations: [SubAboutPage]
})
export class SubAboutPageModule {}
