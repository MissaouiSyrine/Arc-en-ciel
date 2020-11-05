import { Directive,HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appArcEnCielDirective]'
})
export class ArcEnCielDirective {
  @HostBinding('style.border-color') inputBorderColor = 'Black';
  @HostBinding('style.color') inputColor = 'Black';


  constructor() { }
  @HostListener('keydown') onKeyDown()
  {
    this.inputColor = '#' + ( Math.random() * 0xFFFFFF<<0 ).toString(16);
    this.inputBorderColor =  '#' + ( Math.random() * 0xFFFFFF<<0 ).toString(16);
  }

}
