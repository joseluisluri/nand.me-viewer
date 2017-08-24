// Modules
import {NgModule} from '@angular/core';
import {CollectionsRoutingModule} from './repo-routing.module';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {Title} from '@angular/platform-browser';
// Components
// import { IndexComponent } from './systemsbox/index.component';
import {IndexComponent} from './index.component';
import {SystemsBoxComponent} from './systemsbox/systemsbox.component';
import {GamesBoxComponent} from './gamesbox/gamesbox.component';
// Services
import {ApiService} from '../shared/services/api.service';
import {PipesModule} from '../../pipes/pipe.module';

import {ChartModule, DataTableModule, MessagesModule, SharedModule} from 'primeng/primeng';

@NgModule({
    imports: [ MessagesModule, CommonModule, HttpModule, CollectionsRoutingModule,
        PipesModule, DataTableModule, SharedModule, ChartModule ],
    declarations: [ IndexComponent, SystemsBoxComponent, GamesBoxComponent ],
    exports: [ IndexComponent, SystemsBoxComponent, GamesBoxComponent ],
    providers: [ ApiService, Title ]
})
export class RepoModule { }
