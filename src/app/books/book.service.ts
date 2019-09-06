import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from './shared/custom-types';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  root = 'http://localhost:4730/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.root);
  }

  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.root + '/' + isbn);
  }

  saveBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(this.root + '/' + book.isbn, book);
  }

  addBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.root, book);
  }
}

class BikeService extends BookService {
  constructor(private service: HttpClient) {
    super(service);
  }
}
