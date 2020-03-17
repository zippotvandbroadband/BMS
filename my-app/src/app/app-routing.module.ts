import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ServiceplansComponent } from './modules/serviceplans/serviceplans.component';
import { NasComponent } from './modules/nas/nas.component';
import { IppoolsComponent } from './modules/ippools/ippools.component';
import { UsersComponent } from './modules/users/users.component';
import { LogsComponent } from './modules/logs/logs.component';


const routes: Routes = [{
  path : '',
  component:DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent
  },{
    path:'posts',
    component:PostsComponent
  },{
    path:'serviceplans',
    component:ServiceplansComponent,
  },{
    path:'nas',
    component:NasComponent
  },{
    path:'ippools',
    component:IppoolsComponent
  },{
    path:'users',
    component:UsersComponent
  },{
    path:'logs',
    component:LogsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
