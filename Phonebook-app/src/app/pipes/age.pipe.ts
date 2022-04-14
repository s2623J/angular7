import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob?: string, flag?: number): string { // Question mark shows that this is optional
    let result = '';
    if (!!dob) {
      let date1 = new Date(dob);
      let diff = Date.now() - date1.getTime();
      let date2 = new Date(diff);
      let year = date2.getFullYear() - 1970;
      let month = date2.getMonth();
      let days = date2.getDate();
      

      switch (flag) {
        case 2:
          result = `${year} years and ${month} months`;
          break;

        case 3:
          result = `${year} years and ${month} months and ${days} days`;
          break;
      
        default:
          result = `${year} years`;
          break;
      }
    }
    return result;
  }

}
