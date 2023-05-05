import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TicketApiModule } from "src/app/services/ticket-api";
import { PageHeaderComponent } from "src/app/shared/components/page-header/page-header.component";
import { TicketFormComponent } from "./ticket-form/ticket-form.component";
import { TicketListComponent } from "./ticket-list/ticket-list.component";
import { TicketRoutingModule } from "./ticket-rounting.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        TicketApiModule,
        TicketRoutingModule,
        PageHeaderComponent,
    ],
    declarations: [
        TicketListComponent,
        TicketFormComponent,
    ],
})
export class TicketModule { }