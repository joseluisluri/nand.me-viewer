
import { NgModule } from '@angular/core';

// Pipes
import { RoundPipe } from './round.pipe';
import { HumanFileSizePipe } from './humanfilesize.pipe';
import { TitleCasePipe } from './titlecase.pipe';
import {RatingPipe} from "./rating.pipe";

@NgModule({
    declarations: [ RoundPipe, HumanFileSizePipe, TitleCasePipe, RatingPipe ],
    exports: [ RoundPipe, HumanFileSizePipe, TitleCasePipe, RatingPipe ]
})
export class PipesModule { }
