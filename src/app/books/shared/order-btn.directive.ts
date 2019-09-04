import {
  Directive,
  Input,
  ElementRef,
  OnChanges,
  OnInit,
  HostListener
} from '@angular/core';
import { IBook } from './custom-types';

@Directive({
  selector: '[appOrderBtn]'
})
export class OrderBtnDirective implements OnChanges, OnInit {
  @Input() appOrderBtn: IBook;
  orderBtn: HTMLButtonElement = document.createElement('button');
  div = document.createElement('div');
  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.appendChild(this.orderBtn);
    elementRef.nativeElement.appendChild(this.div);
    this.orderBtn.onclick = () => console.log('CLICK', this.appOrderBtn.isbn);
  }
  ngOnInit() {
    console.log('init');
    this.div.innerText = 'Moin!';
    this.div.hidden = true;
  }
  ngOnChanges(chn) {
    console.log(chn);
    this.orderBtn.innerText = this.appOrderBtn.title;
  }
  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter');
    this.div.hidden = false;
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseleave');
    this.div.hidden = true;
  }
}
