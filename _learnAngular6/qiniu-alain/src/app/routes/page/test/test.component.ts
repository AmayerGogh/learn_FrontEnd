import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Config  } from "../../../core/config";
//import * as qiniu from "qiniu-js"
import {UploaderBuilder,Uploader} from 'qiniu4js'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {


  constructor(
    private http: _HttpClient
  ) {
    let uploader = new UploaderBuilder()
   }

  ngOnInit() {     
    
  //   conf.ACCESS_KEY="1234";
     // qiniu.conf.ACCESS_KEY=""//my.ak;
      //qiniu.conf.SECRET_KEY=""//my.sk;
  }
  // qiniu = require("qiniu");
  //qiniu.conf.ACCESS_KEY = '<Your Access Key>'
  //qiniu.conf.SECRET_KEY = '<Your Secret Key>'   
    //mac = new qiniu.auth.digest.Mac("", "");
   ak = Config.ak;
   sk = Config.sk;
   
}
