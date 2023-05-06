import { RouterModule, Routes } from "@angular/router";
import { TicketListComponent } from "./ticket-list/ticket-list.component";
import { NgModule } from "@angular/core";
import { TicketFormComponent } from "./ticket-form/ticket-form.component";
import { TicketViewComponent } from "./ticket-view/ticket-view.component";

const routes: Routes = [
    { path: '', component: TicketListComponent },
    { path: 'novo', component: TicketFormComponent },
    { path: 'ver/:id', component: TicketViewComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TicketRoutingModule { }
