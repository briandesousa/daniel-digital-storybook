import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontCoverComponent } from './pages/front-cover/front-cover.component';
import { Page1Component } from './pages/page1/page1.component';

const routes: Routes = [
  {
    path: '',
    component: FrontCoverComponent
  },
  {
    path: 'page1',
    component: Page1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
