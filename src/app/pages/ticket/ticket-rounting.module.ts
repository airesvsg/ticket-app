import { RouterModule, Routes } from "@angular/router";
import { TicketListComponent } from "./ticket-list/ticket-list.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: TicketListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TicketRoutingModule { }
