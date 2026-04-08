import { Directive, HostBinding, HostListener, Input, input, OnInit, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight2]',
  host: {
    '[style.backgroundColor]':'this.bgc()',
    '(mouseenter)':'this.onMouseEnter()',
    '(mouseleave)':'this.onMouseLeave()',
  }
})
export class Highlight2 implements OnInit {

  in = input('yellow');
  out = input('red');
  bgc = signal(this.out());
  constructor() {}
  ngOnInit(): void {
    this.bgc.set(this.out());
  }

  onMouseEnter() {
    this.bgc.set(this.in());
  }

  onMouseLeave() {
    this.bgc.set(this.out());
  }
}
