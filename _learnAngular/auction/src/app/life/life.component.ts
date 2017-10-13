import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy {
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterViewChecked(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterContentChecked(): void {
    throw new Error("Method not implemented.");
  }

  ngAfterContentInit(): void {
    throw new Error("Method not implemented.");
  }


  constructor() { }


    ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
    ngOnInit() {
  }
  ngDoCheck(): void {
    throw new Error("Method not implemented.");
  }

}
