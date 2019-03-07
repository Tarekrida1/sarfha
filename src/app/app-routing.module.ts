import { MyAdsComponent } from './componentes/my-ads/my-ads.component';
import { MessagesComponent } from './componentes/messages/messages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path: '' , component: HomeComponent, data: {index: 0} },
  {path: 'messages', component: MessagesComponent, data: {index: 1} },
  {path: 'myads', component: MyAdsComponent, data: {index: 2} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
