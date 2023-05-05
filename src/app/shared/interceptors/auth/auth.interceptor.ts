import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/ticket-api";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this.authService.getAccessToken();
        if (this.authService.isLoggedIn()) {
            const headers = request.headers.set('Authorization', `Bearer ${accessToken}`);
            request = request.clone({ headers });
        }
        return next.handle(request);
    }
}