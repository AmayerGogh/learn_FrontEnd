import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
//import { FormGroup, FormControl, FormArray } from "../../../../node_modules/_@angular_forms@4.3.1@@angular/forms/public_api";
//import { FormGroup, FormControl, FormArray } from "../../../../node_modules/_@angular_forms@4.3.1@@angular/forms/forms";


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  // formModel:FormGroup =new FormGroup({
  //   dateRange:new FormGroup({
  //     from:new FormControl(),
  //     to:new FormControl()
  //   }),
  //   emails:new FormArray([
  //     new FormControl("ssdfa@q.cd"),
  //     new FormControl("2123@q1.c2d")
  //   ])
  // });
  // username:FormControl =new FormControl("aaa");
   // addEmail(){
  //   let emails =this.formModel.get("emails") as FormArray;
  //   emails.push(new FormControl());
  // }
  formModel:FormGroup;
  constructor(fb:FormBuilder) {
    this.formModel=
    // new FormGroup({
    //   username:new FormControl(),
    //   mobile:new FormControl(),
    //   passwordsGroup:new FormGroup({
    //     password:new FormControl(),
    //     password2:new FormControl()
    //   })
    // })
    //可以被FormBuilder更简单的替代
    fb.group({
      username:[''],
      mobile:[''],
      passwordsGroup:fb.group({
        password:[''],
        password2:['']
      })
    })
   }

  ngOnInit() {
  }
  onSubmit(value:any){
    console.log(value);
  }
  onSubmit2(){
    console.log(this.formModel.value)
  }
}
