import {RouterModule} from "@angular/router"
import {HomeComponent} from './home/home.component';
import {JokesComponent} from './jokes/jokes.component';

export const appRoutes=[
    {
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},
    {
        path:'home',
       data:{preload:true},
        loadChildren:'./home/home.module#HomeModule'
        //component:HomeComponent
    },
    {
        path:'jokes',
        //使用了预加载
        data:{preload:false},
        //component:JokesComponent
        loadChildren:'./jokes/jokes.module#JokesModule'
    },
    {
		path:'**',//通配符匹配必须写在最后一个
        //component:HomeComponent
        loadChildren:'./home/home.module#HomeModule'
	}
]