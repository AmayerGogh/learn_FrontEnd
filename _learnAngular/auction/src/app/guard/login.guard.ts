import {CanActivate} from '@angular/router';
//继承接口
export class LoginGuard implements CanActivate{
    canActivate(){
        let loggedIn:boolean=Math.random()<0.5;
        if (!loggedIn) {
            console.log("用户没登陆")
        }
        return loggedIn;
    }
}