import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPage } from './about.page';

const routes: Routes = [
  {
    path: '',
    component: AboutPage
  },
  {
    path: 'sub-about',
    loadChildren: () => import('./sub-about/sub-about.module').then( m => m.SubAboutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutPageRoutingModule {}
