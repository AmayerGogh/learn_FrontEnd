import { Component, ViewChild, Input, Output, forwardRef, EventEmitter, ElementRef, Renderer, OnChanges, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { _HttpClient } from '@delon/theme';
import { Config  } from "../../../core/config";

import {CropperHelper} from './cropper'
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls:['../../../../assets/common/css/bootstrap.css', './test2.component.css']
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
