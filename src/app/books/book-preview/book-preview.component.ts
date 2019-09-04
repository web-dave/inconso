import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from '../shared/custom-types';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  @Input() book: IBook;
  @Input() even: boolean;
  @Output() bookSelected = new EventEmitter<IBook>();
  constructor() {}

  ngOnInit() {}

  selectThisBook() {
    console.log('BookPreviewComponent', this.book.title);
    this.bookSelected.emit(this.book);
  }
}
