import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string;
  // @HostBinding('style.color') color: string;

  private _color: string;
  @HostBinding('style.color') get setColor() {
    // codigo...
    return this._color;
  }

  @HostListener('mouseenter') onmouseover() {
    // this._renderer.setElementStyle(this._elementRef.nativeElement
    //   , 'background-color', 'yellow');
    //   this._renderer.setElementStyle(this._elementRef.nativeElement
    //     , 'color', 'blue');
    this.backgroundColor = 'yellow';
    this._color = 'blue';
  }

  @HostListener('mouseout') onmouseout() {
    // this._renderer.setElementStyle(this._elementRef.nativeElement
    //   , 'background-color', 'white');
    // this._renderer.setElementStyle(this._elementRef.nativeElement
    //   , 'color', 'black');
    this.backgroundColor = 'white';
    this._color = 'black';
  }

  constructor() { }
}
