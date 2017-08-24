import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { AppSettings } from '../../appsettings';

@Component({
    moduleId: module.id,
    selector: 'ng-app',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {
    endpoint = AppSettings.API_BASE + '/status/';
    system: any[];
    memory: any[];

    constructor(public api: ApiService) {}

    public ngOnInit() {
        let refresh = () => {
            this.api
                .endpoint(this.endpoint)
                .success((response: any) => {
                    this.system = response.system;
                    this.memory = response.memory;
                }).fail((error: any) => {
                    console.log('FAIL!' + error);
                }).exec();
        };
        refresh();
        setInterval(refresh, 5000);
    }
}
