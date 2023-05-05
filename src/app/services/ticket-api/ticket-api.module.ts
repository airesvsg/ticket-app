import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthService, UserService } from "./api";
import { TicketService } from "./api/ticket.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        AuthService,
        UserService,
        TicketService,
    ]
})
export class TicketApiModule { }