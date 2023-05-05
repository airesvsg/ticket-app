import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TicketApiModule } from "src/app/services/ticket-api";
import { AuthInterceptor } from "./auth.interceptor";

@NgModule({
    imports: [
        TicketApiModule,
        RouterModule,
    ],
    providers: [
        AuthInterceptor,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        }
    ]
})
export class AuthInterceptorModule { }