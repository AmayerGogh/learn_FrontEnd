import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {TestAnimationComponent} from './test-animation/test-animation.component';


const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'}

   
 
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