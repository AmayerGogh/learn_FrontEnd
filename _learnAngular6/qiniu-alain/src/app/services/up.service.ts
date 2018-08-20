import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UpService {

  constructor(private http: HttpClient) { } // (3)
  server:string="http://localhost:62114/"
  upfile(imgb:string){
    var headers1 = new Headers();
    headers1.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http 
      .post(this.server+"apis/qiniu/uploadBase64",{"msg":"aa"},{headers: headers1[0] })
      .subscribe(data => {
        console.log(data); 
      });
  }
}
