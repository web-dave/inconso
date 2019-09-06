import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './custom-types';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(books: IBook[] = [], args: number = 1): IBook[] {
    return books.splice(0, args);
    // return books.slice(0, args);
  }
}
