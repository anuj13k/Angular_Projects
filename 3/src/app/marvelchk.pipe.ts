import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvelchk',
  standalone: true
})
export class MarvelchkPipe implements PipeTransform {

  transform(value: number, param: string): string {
    switch (param) {
      case 'Prime':
        return this.isPrime(value)
          ? 'It is Prime number'
          : 'It is not Prime number';

      case 'Perfect':
        return this.isPerfect(value)
          ? 'It is Perfect number'
          : 'It is not Perfect number';

      case 'Even':
        return value % 2 === 0
          ? 'It is Even number'
          : 'It is not Even number';

      case 'Odd':
        return value % 2 !== 0
          ? 'It is Odd number'
          : 'It is not Odd number';

      default:
        return 'Invalid Parameter';
    }
  }

  private isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  private isPerfect(num: number): boolean {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) sum += i;
    }
    return sum === num;
  }

}
