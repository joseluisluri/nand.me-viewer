import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {
    transform (input: number, fixed: number = 0) {
        return input.toFixed(fixed);
    }
}
