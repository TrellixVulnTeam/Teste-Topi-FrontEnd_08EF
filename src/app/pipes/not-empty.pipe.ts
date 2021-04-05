import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notEmpty'
})
export class NotEmptyPipe implements PipeTransform {

  transform(value: any[]): any[] {
    const resultArray = [];
    value.forEach(element => {
      if (element !== ''){
        resultArray.push(element);
      }
    });
    return resultArray;
  }

}
