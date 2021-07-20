import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elem:ElementRef){}
    // this.elem.nativeElement.style.backgroundColor="rgb(255, 0, 0)";
  
    @HostListener("click") onClicks(){
      this.textDeco("green")
    }
  
    @HostListener("dblclick") onDoubleClicks(){
      this.textDeco("red")
    }
  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor=action;

  }
  

}
