import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../shared/custom-types';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: IBook[];
  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.service
      .getBooks()
      .subscribe(
        b => (this.books = b),
        err => console.error(err),
        () => console.warn('Fertisch!')
      );
  }
  selectBook(e: IBook) {
    console.table('BookListComponent', e);
    this.router.navigate([e.isbn], { relativeTo: this.route });
  }
}
