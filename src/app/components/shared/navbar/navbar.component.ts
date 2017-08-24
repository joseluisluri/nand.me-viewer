import {Component} from '@angular/core';
declare var $ : any;

@Component({
    selector: 'ng-navbar',
    templateUrl: 'app/components/shared/navbar/navbar.component.html',
    styleUrls: ['app/components/shared/navbar/navbar.component.css'],
})

export class NavbarComponent {

    ngAfterViewInit(): void {
        $('[data-toggle="tooltip"]').tooltip()
    }
}
