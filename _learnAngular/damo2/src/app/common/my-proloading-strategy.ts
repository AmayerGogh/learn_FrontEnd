import { Route,PreloadingStrategy } from '@angular/router';
import { Observable } from "rxjs";
import "rxjs/add/observable/of";
///自定义预加载
/// 用法:
// RouterModule.forRoot(appRoutes,{preloadingStrategy:MyPreloadingStrategy})
export class MyPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any>{
        return route.data&&route.data.preload?fn():Observable.of(null);
    }
}