import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data',
  standalone: false
})
export class DataPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
