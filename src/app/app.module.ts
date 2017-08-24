import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './components/shared/shared.module';

import {LoaderSpinnerComponent} from './components/loader-spinner/loader-spinner.component';
import {PlayedComponent} from './components/played/played.component';
import {StatusComponent} from './components/status/status.component';
import {RepoModule} from './components/repo/repo.module';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {PipesModule} from './pipes/pipe.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ChartModule, DataTableModule, MessagesModule, RatingModule} from 'primeng/primeng';
import {RouterModule, Routes} from '@angular/router';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

const routes: Routes = [
    //{ path: '', redirectTo: 'repo', pathMatch: 'full' },
    { path: 'played', component: PlayedComponent },
    { path: 'status', component: StatusComponent },
    { path: 'repo', component: RepoModule },
    //{ path: '**', component: StatusComponent } /* PageNotFoundComponent */
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        RepoModule,
        SharedModule,
        DataTableModule,
        MessagesModule,
        ChartModule,
        RatingModule,
        PipesModule,
        BrowserAnimationsModule,
    ],
    declarations: [
        AppComponent,
        StatusComponent,
        PlayedComponent,
        LoaderSpinnerComponent
    ],
    bootstrap: [
        NavbarComponent,
        AppComponent
    ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);