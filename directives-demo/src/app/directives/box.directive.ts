import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBox]'
})
export class BoxDirective implements AfterViewInit {

  borderStyle = {
    size:   '1px',
    type:   'solid',
    color:  '#eee'
  };

  constructor(private elem: ElementRef) { }
  ngAfterViewInit(): void {
    // Note use of ticks rather than quotes below - one way to do it
    this.elem.nativeElement.style.border = `${this.borderStyle.size} ${this.borderStyle.type} ${this.borderStyle.color}`;
    this.elem.nativeElement.style.borderRadius = '5px';
    this.elem.nativeElement.style.padding = '5px';
    this.elem.nativeElement.style.margin = '5px';
  }

}
