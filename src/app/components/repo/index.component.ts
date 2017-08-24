import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SystemsBoxComponent } from './systemsbox/systemsbox.component';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: './index.component.html'
})
export class IndexComponent implements AfterViewInit {
    @ViewChild(SystemsBoxComponent)
    systemsBoxComponent: SystemsBoxComponent;
    data: any;

    public constructor(private titleService: Title) {
        this.data = {
            labels: ['Have', 'Fail', 'Miss'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#5cb85c',
                        '#f0ad4e',
                        '#d9534f'
                    ],
                    hoverBackgroundColor: [
                        '#449d44',
                        '#ec971f',
                        '#c9302c'
                    ]
                }]
        };
    }
    ngAfterViewInit(): void {
        this.titleService.setTitle('Repository - nand.me');

    }
}