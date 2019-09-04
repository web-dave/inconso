import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages'
})
export class PagesPipe implements PipeTransform {
  transform(value: number, text = 'Seitenzahl', trenner = ':'): string {
    console.log('PIPE!!!!');
    return `${text}${trenner} ${value}`;
  }
}
