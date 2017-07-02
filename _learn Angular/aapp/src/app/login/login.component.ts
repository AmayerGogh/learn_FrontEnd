import { Component, OnInit ,Inject} from '@angular/core';
//import { AuthService } from '../core/auth.service';

@Component({
  selector: 'login',
   templateUrl: 'login.component.html',

  styles: [`
    .ng-invalid{
      border: 3px solid red;
    }
    .ng-valid{
      border: 3px solid green;
    }
  `]
  //在providers中配置AuthService
  // providers:[AuthService]
})
export class LoginComponent implements OnInit {
  username ="";
  pwd="";
 // constructor(private service: AuthService) { }
 constructor(@Inject('auth') private service) {
  }
  ngOnInit() {
  }

  onClick(){
    alert("hello world" +this.username +"--"+this.pwd)
    alert('auth result is: ' + this.service.loginWithCredentials(this.username, this.pwd))
  }
    onSubmit(formValue) {
    console.log(formValue);
    alert(formValue)
     console.log('auth result is: '
      + this.service.loginWithCredentials(formValue.login.username, formValue.login.pwd));
  }
}
