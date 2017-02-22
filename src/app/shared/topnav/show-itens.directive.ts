import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[invetShowItens]'
})
export class ShowItensDirective {
  @HostBinding('class.open')
  @Input() isOpen: boolean = false;

  constructor(private _elementRef: ElementRef) {
  }

  // @HostListener('mouseleave')
  // mouseout(event) {
  //   setTimeout(() => {
  //     this.isOpen = false;
  //   }, 3000);
  // }  

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {

    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    } else {
      this.isOpen = !this.isOpen;
    }
  }



}
