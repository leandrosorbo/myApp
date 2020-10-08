import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full'
      },
      {
        path: 'feed',
        loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
      },
      {
        path: 'activity',
        loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
