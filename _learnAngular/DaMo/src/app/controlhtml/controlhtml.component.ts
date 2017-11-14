import { Component } from '@angular/core';

@Component({
    selector: 'app-test-animation',
    templateUrl: './controlhtml.component.html',
    styleUrls: ['./controlhtml.component.scss'],
    
  })
  export class ControlhtmlComponent {

    title = 'app';
    
      public isShow:boolean=true;
      
      public toggleShow():void{
          this.isShow=!this.isShow;
      }
      public races:Array<any>=[
        {name:"人族"},
        {name:"虫族"},
        {name:"神族"}
      ];
      public currentClasses:{};
      public canSave:boolean =true;
      public isUnchanged:boolean=true;
      public isPescial:boolean =true;
      setCurrentClasses(){
        this.currentClasses={
          'saveable':this.canSave,
          'modified':this.isUnchanged,
          'special':this.isPescial
        }
      }
    
    
      public currentStyles:{};
      public canSave1:boolean=false;
      public isUnchanged1:boolean =false;
      public isSpecial:boolean=false;
      setCurrentStyles() {
        this.currentStyles = {
            'font-style':  this.canSave1      ? 'italic' : 'normal',
            'font-weight': !this.isUnchanged1 ? 'bold'   : 'normal',
            'font-size':   this.isSpecial    ? '36px'   : '12px'
        };
      };
      public currentRace:any={name:"随机种族"};
  
  }
  