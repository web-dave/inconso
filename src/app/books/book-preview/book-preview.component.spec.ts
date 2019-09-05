import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPreviewComponent } from './book-preview.component';
import { IBook } from '../shared/custom-types';

// tslint:disable:max-line-length
export const book: IBook = {
  title: 'Design Patt',
  subtitle: 'Elements of Reusable Object-Oriented Software',
  isbn: '978-0-20163-361-0',
  abstract:
    'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.',
  numPages: 395,
  author: 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
  publisher: {
    name: 'Addison-Wesley',
    url: 'http://www.addison-wesley.de/'
  }
};
describe('BookPreviewComponent', () => {
  let component: BookPreviewComponent;
  let fixture: ComponentFixture<BookPreviewComponent>;
  let view: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookPreviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPreviewComponent);
    component = fixture.componentInstance;
    component.book = book;
    fixture.detectChanges();
    view = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show book.title', () => {
    const title = view.querySelector('li').innerText;
    expect(title).toBe(book.title);
  });

  it('should return the book as selectedBook', async(() => {
    let selectedBook: IBook;
    component.bookSelected.subscribe(b => (selectedBook = b));
    view.querySelector('button').click();
    expect(selectedBook).toBe(book);
  }));

  it('should return the book as selectedBook', done => {
    let selectedBook: IBook;
    component.bookSelected.subscribe(b => {
      selectedBook = b;
      expect(selectedBook).toBe(book);
      done();
    });
    view.querySelector('button').click();
  });
});
