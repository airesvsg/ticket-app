import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService, SignIn, SignInDto, TicketApiModule } from "src/app/services/ticket-api";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ]
})
export class LoginComponent implements OnInit {
    formGroup!: FormGroup;

    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }

    submit() {
        if (this.formGroup.valid) {
            const formData: SignInDto = this.formGroup.value;
            this.authService.login(formData).subscribe({
                next: (signIn: SignIn) => {
                    this.authService.store(signIn);
                    this.router.navigateByUrl('/tickets');
                },
                error: error => console.error(error),
            });
        }
    }
}