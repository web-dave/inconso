import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isbnValidator } from '../shared/validator';
import { IBook } from '../shared/custom-types';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  saved = false;
  constructor(
    private builder: FormBuilder,
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.builder.group({
      title: ['', [Validators.required]],
      subtitle: ['', []],
      isbn: ['', [isbnValidator]],
      abstract: ['', []],
      numPages: [0],
      author: ['', []]
    });
  }
  saveBook() {
    const newBook = {
      title: '',
      subtitle: '',
      isbn: '',
      abstract: '',
      numPages: 0,
      author: '',
      publisher: {
        name: '',
        url: ''
      }
    };
    const gBook: IBook = {
      ...newBook,
      ...this.form.value
    };
    console.log(this.form.get('title').value, gBook);
    this.service.addBook(this.form.value).subscribe(b => {
      this.saved = true;
      this.router.navigate(['..', b.isbn], { relativeTo: this.route });
    });
  }
  isSaved(): boolean {
    return this.saved || !this.form.dirty;
  }
}
