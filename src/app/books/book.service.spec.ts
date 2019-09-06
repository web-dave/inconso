import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { BookService } from './book.service';
import { books } from './shared/filter.pipe.spec';

fdescribe('BookService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });

  it('should return a list of books', inject(
    [BookService, HttpTestingController],
    (service: BookService, backend: HttpTestingController) => {
      service.getBooks().subscribe(b => expect(b).toBe(books));
      backend
        .expectOne('http://localhost:4730/books')
        .flush(books, { status: 200, statusText: 'OK' });
    }
  ));

  it('should return a book', () => {
    const service = TestBed.get(BookService);
    service.getBook('hurz').subscribe(b => {
      // expect(b).toBe(books[0]);
      // done();
    });
    // const backend: HttpTestingController = TestBed.get(HttpTestingController);
    // backend.expectOne('http://localhost:4730/books/hurz').flush(books[0]);
  });

  afterEach(() => {
    inject([HttpTestingController], (backend: HttpTestingController) => {
      backend.verify();
    });
  });
});
