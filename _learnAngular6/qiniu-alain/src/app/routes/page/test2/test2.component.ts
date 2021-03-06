import { Component, ViewChild, Input, Output, forwardRef, EventEmitter, ElementRef, Renderer, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { _HttpClient } from '@delon/theme';
import { Config  } from "../../../core/config";

import {CropperHelper} from './cropper'
import { UpService } from '../../../services/up.service';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls:['./test2.component.less'], //'../../../../assets/common/css/bootstrap.css', 
  encapsulation:ViewEncapsulation.None //禁用样式封装 限制自动生成[_ngcontent-c6]等
})
export class Test2Component implements OnInit  {
  jQuery:any;
  crop: CropperHelper;
   url:string;
  constructor(private upService:UpService){
    
  }
  ngOnInit(): void { 
     

  } 
  ngAfterViewInit() :void{
    this.crop = new CropperHelper();
    this.crop.init();
    //let c = this.crop.get();
    //console.log(c)       
  }
  setAspectRatio(value:number):void{
      this.crop.setAspectRatio(value);    
  }
  getCanvasData(){
    this.crop.getCanvasData();  
  }
  getImageData(){            
    this.crop.getImageData();
}
   getCropBoxData(){            
    this.crop.getCropBoxData();
}
//没用
  setCroppedCanvas(){
    this.crop.setCroppedCanvas();
  }

  upload(){
     
     var data = this.crop.getCroppedCanvas();   
    //  var result =this.upService.upfile(data);
    //  console.log(result);
    //  if(result.code==200){
    //    this.url =result.data[0];
    //  }
    this.upService.upfile(data).subscribe(data =>{
        console.log(data);
        if(data.code==200){
          this.url =data.data[0];
        }
    })
  }
}
