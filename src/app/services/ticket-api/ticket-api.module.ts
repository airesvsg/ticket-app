import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthService, UserService } from "./api";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        AuthService,
        UserService,
    ]
})
export class TicketApiModule { }