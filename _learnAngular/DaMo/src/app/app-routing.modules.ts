import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {TestAnimationComponent} from './test-animation/test-animation.component';
import {ControlhtmlComponent} from  './controlhtml/controlhtml.component';
import {Test3Component}from './test3/test3.component';
import  {FormQuickStartComponent} from "./form-quick-start/form-quick-start.component"
import {FormBindingComponent} from "./form-binding/form-binding.component"

const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'controlhtml',component:ControlhtmlComponent},
    {path:'testAnimation',component:TestAnimationComponent},
    {path:'test3',component:Test3Component},
    {path:'form',component:FormQuickStartComponent},
    {path:'form2',component:FormBindingComponent},
    {path:'**',component:ControlhtmlComponent}
   
 
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    providers:[
    ]
})
export class AppRoutingModule{
    
}
//LoginGuard UnsaveGuard 的作用 相当于一个权限过滤器 进入时 离开时