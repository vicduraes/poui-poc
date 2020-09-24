import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

import { PoBreadcrumb } from '@po-ui/ng-components'
import { PoNotificationService } from '@po-ui/ng-components'
import { PoTableColumn } from '@po-ui/ng-components'

import { DashboardService } from '../../service/dashboard.service'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [DashboardService],
})
export class DashboardComponent {
    columns: Array<PoTableColumn> = this.DashboardService.getColumns()
    email: string = undefined
    isSubscribed: boolean = false
    items: Array<object> = this.DashboardService.getItems()

    public readonly breadcrumb: PoBreadcrumb = {
        items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }],
    }

    @ViewChild('formShare', { static: true }) formShare: NgForm

    constructor(
        private poNotification: PoNotificationService,
        private DashboardService: DashboardService
    ) {}

    share() {
        if (this.formShare.valid) {
            this.poNotification.success(
                `Webpage shared successfully to: ${this.email}.`
            )
        } else {
            this.poNotification.error(`Email invalid.`)
        }
    }
}
