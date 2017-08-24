import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {DataTable, LazyLoadEvent} from 'primeng/primeng';
import {Title} from '@angular/platform-browser';
import {AppSettings} from '../../../appsettings';

@Component({
    moduleId: module.id,
    selector: 'ng-repo-systemsbox',
    templateUrl: './systemsbox.component.html',
})

export class SystemsBoxComponent implements OnInit {
    title = 'Played Games History';
    endpoint: string = AppSettings.API_BASE + '/repo/systems';

    @ViewChild('dataTable') dataTable: DataTable;
    systems: any[] = null;
    loading = true;

    count = 0;
    page = 1;
    per_page = 15;
    order = 'asc';
    order_by = 'name';
    message: any[] = [];

    constructor(public api: ApiService, private titleService: Title) {}

    public ngOnInit() {
        this.loadData(this.per_page, this.page, this.order, this.order_by);
        this.dataTable.sortOrder = -1; // 1 for asc and -1 for desc
        this.dataTable.sortField = this.order_by;
    }

    public onLazyLoad(event: LazyLoadEvent) {
        if (this.systems) {
            let page = (event.first / event.rows + 1);
            let per_page = event.rows;
            let order = event.sortOrder === -1 ? 'desc' : 'asc'; // 1 for asc and -1 for desc
            let order_by = event.sortField || this.order_by;
            this.loadData(per_page, page, order, order_by);
        }
    }

    ngAfterViewInit(): void {
        this.titleService.setTitle(this.title);
    }

    private loadData(per_page: number, page: number, order: string, order_by: string) {
        let query: string = this.endpoint;
        // let query: string = this.endpoint + '?per_page=' + per_page + '&page=' + page + '&order=' + order + '&order_by=' + order_by;
        this.loading = true;
        console.log(query);
        this.api
            .endpoint(query)
            .success((response: any) => {
                this.loading = false;
                this.systems = response.records;
                this.count = response.count;
                console.log(this.systems)
            }).fail((error: any) => {
                this.loading = false;
                this.message.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
        }).exec();
    }
}
