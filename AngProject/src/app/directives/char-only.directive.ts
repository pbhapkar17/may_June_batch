import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharOnly]'
})
export class CharOnlyDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('input',['$event'])
  onInputChange(){
    let value = this.elementRef.nativeElement.value;
    console.log('value',value);
    this.elementRef.nativeElement.value = value.replace(/[^a-zA-Z]*/g , '');
  }
}
