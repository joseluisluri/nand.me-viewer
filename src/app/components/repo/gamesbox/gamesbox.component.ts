import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { AppSettings } from '../../../appsettings';

@Component({
    moduleId: module.id,
    selector: 'ng-preservation-gamestable',
    templateUrl: './gamesbox.component.html',
    styleUrls: ['./gamesbox.component.css']
})

export class GamesBoxComponent implements OnInit {
    @Input() tag: string;
    endpoint = AppSettings.API_BASE + '/v1/preservation/system/';
    system: any[];
    onBindListener: any[] = [];
    rows: number = 50;
    paginator: boolean = true;

    constructor(public api: ApiService) {}

    public ngOnInit() {
        this.bind();
    }

    public bind() {
        if (this.tag != null) {
            /*this.api
                .endpoint(this.endpoint + this.tag)
                .subscribe((response: any) => {
                    this.system = response;
                    this.onBindListener.forEach((c) => c());
            });*/
        }
    }

    public size(roms: any[]) {
        return roms.reduce((n: number, rom: any) => n + rom.size, 0);
    }
}
