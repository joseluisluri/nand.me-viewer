import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../shared/services/api.service';
import {DataTable, LazyLoadEvent} from 'primeng/primeng';
import {Title} from '@angular/platform-browser';
import {AppSettings} from '../../appsettings';


@Component({
    moduleId: module.id,
    selector: 'ng-app',
    templateUrl: './played.component.html',
})

export class PlayedComponent implements OnInit {
    title: string = 'Systems - Preservation Project';
    endpoint: string = AppSettings.API_BASE + '/played/';

    @ViewChild('dataTable') dataTable: DataTable;
    games: any[] = null;
    loading: boolean = true;

    count: number = 0;
    page: number = 1;
    per_page: number = 15;
    order: string = 'desc';
    order_by: string = 'date';
    message: any[] = [];

    constructor(public api: ApiService, private titleService: Title) {}

    public ngOnInit() {
        this.loadData(this.per_page, this.page, this.order, this.order_by);
        this.dataTable.sortOrder = -1; // 1 for asc and -1 for desc
        this.dataTable.sortField = this.order_by;
    }

    public onLazyLoad(event: LazyLoadEvent) {
        if (this.games) {
            let page = (event.first / event.rows + 1);
            let per_page = event.rows;
            let order = event.sortOrder == -1 ? 'desc' : 'asc'; // 1 for asc and -1 for desc
            let order_by = event.sortField || this.order_by;
            this.loadData(per_page, page, order, order_by);
        }
    }

    ngAfterViewInit(): void {
        this.titleService.setTitle(this.title);
    }

    private loadData(per_page: number, page: number, order: string, order_by: string) {
        let query: string = this.endpoint + '?per_page=' + per_page + '&page=' + page + '&order=' + order + '&order_by=' + order_by;
        this.loading = true;
        console.log(query);
        this.api
            .endpoint(query)
            .success((response: any) => {
                this.loading = false;
                this.games = response.records;
                this.count = response.count;
            }).fail((error: any) => {
                this.loading = false;
                this.message.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
            }).exec();
    }
}
