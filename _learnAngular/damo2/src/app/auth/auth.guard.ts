import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, CanActivateChild } from '@angular/router';
//import { AuthService } from './auth.service';


// @Injectable()
// export class AuthGuard implements CanLoad,CanActivate,CanActivateChild{
//     canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
//         throw new Error("Method not implemented.");
//     }

//     constructor(private authService:AuthService){

//     }

//     /**
//      * 验证路由是否可以激活
//      */
//     canActivate(){
//         //在真实的应用里面需要写一个Service到后端去验证权限
//         return this.authService.canActivate();
//     }

//     /**
//      * 验证子路由是否可以激活
//      */
//     canActivateChild(){
//         //在真实的应用里面需要写一个Service到后端去验证权限
//         return true;
//     }
// }