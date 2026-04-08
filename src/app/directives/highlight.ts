import { Directive, HostBinding, HostListener, Input, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight implements OnInit {
  @Input()
  in = 'yellow';
  @Input()
  out = 'red';
  // Comment spécifier l'apparence à gérer
  @HostBinding('style.backgroundColor')
  bgc = this.out;
  constructor() {}
  ngOnInit(): void {
    this.bgc = this.out;
  }

  //Comment spécifier le comportement
  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgc = this.out;
  }
}
