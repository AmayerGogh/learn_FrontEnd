import { Directive, ElementRef,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[my-high-light]'
})
export class MyHighLightDirective {
  @Input() 
  highlightColor: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}