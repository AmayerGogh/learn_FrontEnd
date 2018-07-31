import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Config  } from "../../../core/config";
//import * as qiniu from "qiniu"
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {


  constructor(
    private http: _HttpClient
  ) { }

  ngOnInit() {     
     // qiniu.conf.ACCESS_KEY=""//my.ak;
      //qiniu.conf.SECRET_KEY=""//my.sk;
  }
  // qiniu = require("qiniu");
  //qiniu.conf.ACCESS_KEY = '<Your Access Key>'
  //qiniu.conf.SECRET_KEY = '<Your Secret Key>'   
   ak = Config.ak;
   sk = Config.sk;
   
}
