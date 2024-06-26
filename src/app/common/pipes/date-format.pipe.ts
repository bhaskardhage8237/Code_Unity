import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: number): string {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(new Date(value * 1000), 'MM/dd/yy');
    return formattedDate || '';
  }

}
