import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { PagesPipe } from '../shared/pages.pipe';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book$;
  constructor(private service: BookService, private route: ActivatedRoute) {}
  foo = 42;
  i = 0;
  ngOnInit() {
    this.route.params.subscribe((params: { isbn: string }) => {
      this.book$ = this.service.getBook(params.isbn);
    });
    // setInterval(() => {
    //   this.foo = 'baz';
    // }, 1000);
  }
  transform(value: number, text = 'Seitenzahl', trenner = ':'): string {
    // console.log('METHODE!!!!');
    return `${text}${trenner} ${value}`;
  }
}
