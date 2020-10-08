import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubAboutPage } from './sub-about.page';

const routes: Routes = [
  {
    path: '',
    component: SubAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubAboutPageRoutingModule {}
