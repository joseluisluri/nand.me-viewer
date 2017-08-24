import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Pipe({name: 'rating'})
export class RatingPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}
    transform (score: number) {
        const star = '<i class="fa fa-star" aria-hidden="true"></i>';
        const star_half = '<i class="fa fa-star-half-o" aria-hidden="true"></i>';
        const staro = '<i class="fa fa-star-o" aria-hidden="true"></i>';

        let html = star.repeat(Math.floor(score))
                + star_half.repeat(Math.ceil(score) - Math.floor(score))
                + staro.repeat(5 - Math.ceil(score));

        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
