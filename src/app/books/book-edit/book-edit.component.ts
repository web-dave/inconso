import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../shared/custom-types';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book: IBook;
  constructor(
    private service: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: { isbn: string }) =>
          this.service.getBook(params.isbn)
        )
      )
      .subscribe(b => (this.book = b));

    // this.route.params.subscribe((params: { isbn: string }) => {
    //   this.service.getBook(params.isbn).subscribe(b => (this.book = b));
    // });
  }
  saveBook() {
    this.service
      .saveBook(this.book)
      .subscribe(b => this.router.navigate(['..'], { relativeTo: this.route }));
  }
}
