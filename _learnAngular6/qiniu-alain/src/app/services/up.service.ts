import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { map, tap, catchError, filter } from 'rxjs/operators';
;
@Injectable({
  providedIn: 'root'
})
export class UpService {

  result:apiBaseCommon;

  constructor(private http: HttpClient) { } // (3)
  server:string="http://localhost:62114/"
  upfile(imgb:string):Observable<apiBaseCommon>{
    let headers = {
      headers: new HttpHeaders({
        //'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8"
      })
    };   
    let data ={"msg":imgb}
    // this.http 
    //   .post("/apis/qiniu/uploadBase64",data,headers )
    //   .subscribe((data:apiBaseCommon) => {
    //        this.result=data ;
    //        return data;
    //   })

   return this.http.post<apiBaseCommon>("/apis/qiniu/uploadBase64",data,headers).pipe(
      tap((data:apiBaseCommon)=>{
        return data;
      })     
    )
    //return this.result;
  }


  upfile2(formData:FormData):Observable<any>{
   
    // You can use any AJAX library you like
    const req = new HttpRequest('POST',"/apis/qiniu/uploadFile", formData, {
        // reportProgress: true
    });

   
    return  this.http.request(req).pipe(filter(e => e instanceof HttpResponse));
  
    //return null;
  }
}
