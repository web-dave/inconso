import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  AfterContentChecked
} from '@angular/core';
import { IBook } from '../shared/custom-types';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPreviewComponent implements OnInit, AfterContentChecked {
  @Input() book: IBook;
  @Input() even: boolean;
  @Output() bookSelected = new EventEmitter<IBook>();
  constructor() {}

  ngOnInit() {}

  selectThisBook() {
    console.log('BookPreviewComponent', this.book.title);
    this.bookSelected.emit(this.book);
  }
  change() {
    this.book.title = new Date().toISOString();
  }

  ngAfterContentChecked(): void {
    console.log('--> Check');
  }
}
