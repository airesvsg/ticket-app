import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "src/app/services/ticket-api";

@Component({
    selector: 'navbar',
    standalone: true,
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class NavbarComponent {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/');
    }

    showLogoutBtn() {
        return this.authService.isLoggedIn();
    }
}