import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'kiloFormater' })
export class KiloPipe implements PipeTransform {
    transform(value: any): string {
      if (!value) {
        return value;
      }
      return (value / 2.205).toFixed(1).toString() + ' kg';
    }
}
