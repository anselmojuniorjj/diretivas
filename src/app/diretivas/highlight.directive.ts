import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';

  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = this.highlightColor;
    this.color = 'white';
  }

  @HostListener('mouseout') onmouseout(){
    this.backgroundColor = this.defaultColor;
    this.color = 'black';
  }

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
