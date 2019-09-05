import { OrderBtnDirective } from './order-btn.directive';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { book } from '../book-preview/book-preview.component.spec';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-gf-gf',
  template: '<div [appOrderBtn]="book"></div>'
})
class FooComponent {
  book = book;
}

describe('OrderBtnDirective', () => {
  let component: FooComponent;
  let fixture: ComponentFixture<FooComponent>;
  let directive: OrderBtnDirective;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderBtnDirective, FooComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const dir = fixture.debugElement.query(By.directive(OrderBtnDirective));
    directive = dir.injector.get(OrderBtnDirective);
  });

  it('console.log should be emitted 1', () => {
    spyOn(console, 'log');
    directive.orderBtn.click();
    expect(console.log).toHaveBeenCalledWith('CLICK', book.isbn);
  });
  it('console.log should be emitted 2', () => {
    const mySpy = spyOn(console, 'log').and.callThrough();
    directive.orderBtn.click();
    expect(mySpy).toHaveBeenCalledWith('CLICK', book.isbn);
  });
});
