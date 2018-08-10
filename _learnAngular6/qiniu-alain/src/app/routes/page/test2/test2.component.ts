import { Component, ViewChild, Input, Output, forwardRef, EventEmitter, ElementRef, Renderer, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { _HttpClient } from '@delon/theme';
import { Config  } from "../../../core/config";

import {CropperHelper} from './cropper'
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls:['./test2.component.less'], //'../../../../assets/common/css/bootstrap.css', 
  encapsulation:ViewEncapsulation.None //禁用样式封装 限制自动生成[_ngcontent-c6]等
})
export class Test2Component implements OnInit  {
  jQuery:any;
  ngOnInit(): void { 
     let crop = new CropperHelper();
      crop.init();
      let c = crop.get();
      console.log(c) 

  } 

  
   
}
