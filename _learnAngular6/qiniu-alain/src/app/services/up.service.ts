import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UpService {

  constructor(private http: HttpClient) { } // (3)
  server:string="http://localhost:62114/"
  upfile(imgb:string){
    let headers = {
      headers: new HttpHeaders({
        //'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8"
      })
    }; 
    let data ={"msg":imgb}
    this.http 
      .post("/apis/qiniu/uploadBase64",data,headers )
      .subscribe(data => {
        console.log(data); 
      });
  }
}
