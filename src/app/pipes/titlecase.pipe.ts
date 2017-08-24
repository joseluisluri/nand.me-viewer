import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'titlecase'})
export class TitleCasePipe implements PipeTransform {
    transform (input: string) {
        const ignore: string[] = [ 'of', 'the', 'and', 'a', 'an' ] ;
        const upper: string[] = [ '3d', 'hd', 'cd' ];
        const arr: string[] = [];

        input.split(' ').forEach(function(word, i) {
            word = word.toLowerCase();

            if (word in ignore && i !== 0) {
                arr.push(word);
            } else if (word in upper) {
                arr.push(word.toUpperCase());
            } else {
                arr.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
            }
        });
        return arr.join(' ');
    }
}
