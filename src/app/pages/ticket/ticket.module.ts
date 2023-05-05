import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TicketApiModule } from "src/app/services/ticket-api";
import { TicketListComponent } from "./ticket-list/ticket-list.component";
import { RouterModule } from "@angular/router";
import { PageHeaderComponent } from "src/app/shared/components/page-header/page-header.component";
import { TicketRoutingModule } from "./ticket-rounting.module";

@NgModule({
    imports: [
        CommonModule,
        TicketApiModule,
        RouterModule,
        TicketRoutingModule,
        PageHeaderComponent,
    ],
    declarations: [
        TicketListComponent,
    ],
})
export class TicketModule { }