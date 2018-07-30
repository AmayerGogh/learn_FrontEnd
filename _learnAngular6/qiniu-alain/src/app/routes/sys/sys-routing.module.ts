import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysLogComponent } from './log/log.component';

const routes: Routes = [
  { 
    path: '', 
    component: SysLogComponent,
    children:[
      {  path: 'log', component: SysLogComponent, data: { title: 'test', titleI18n: 'dashboard' } }
     ]
   }
  ];

 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysRoutingModule { }
