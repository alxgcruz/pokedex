import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'metroFormater' })
export class MetroPipe implements PipeTransform {
    transform(value: any): string {
      if (!value) {
        return value;
      }
      return (value / 3.281).toFixed(1).toString() + ' m';
    }
}
