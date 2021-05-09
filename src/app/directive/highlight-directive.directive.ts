import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {
  @HostBinding('style.backgroundColor') bgColor = 'red';
  constructor() { }
  @HostListener('mouseenter') mouseEnter(): void{
    this.bgColor = 'blue';
  }
  @HostListener('mouseleave') mouseLeave(): void{
    this.bgColor = 'white';
  }
}
