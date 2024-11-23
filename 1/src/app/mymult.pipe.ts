import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymult',
  standalone: true
})
export class MymultPipe implements PipeTransform {

  transform(value: number, param: number): number {
    return value * param;
  }

}
