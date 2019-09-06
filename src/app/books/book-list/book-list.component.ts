import {
  Component,
  AfterContentChecked,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../shared/custom-types';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BookListComponent implements OnInit {
  books: IBook[];
  books$: Observable<IBook[]>;

  i = 0;
  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.books$ = this.service.getBooks();
  }
  selectBook(e: IBook) {
    console.table('BookListComponent', e);
    this.router.navigate([e.isbn], { relativeTo: this.route });
  }
}
