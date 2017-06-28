import { Component, OnInit ,Inject} from '@angular/core';
//import { AuthService } from '../core/auth.service';

@Component({
  selector: 'login',
   templateUrl: 'login.component.html',
  styles: [],
  //在providers中配置AuthService
  // providers:[AuthService]
})
export class LoginComponent implements OnInit {

 // constructor(private service: AuthService) { }
 constructor(@Inject('auth') private service) {
  }
  ngOnInit() {
  }

  onClick(username,pwd){
    alert("hello world" +username +"--"+pwd)
    alert('auth result is: ' + this.service.loginWithCredentials(username, pwd))
  }
}
