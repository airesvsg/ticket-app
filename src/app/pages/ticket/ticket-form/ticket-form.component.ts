import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Ticket, TicketService } from "src/app/services/ticket-api";

@Component({
    selector: 'app-ticket-form',
    templateUrl: './ticket-form.component.html',
    styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
    formGroup!: FormGroup;

    constructor(
        private ticketService: TicketService,
        private formBuilder: FormBuilder,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            title: ['', [Validators.required]],
            message: ['', [Validators.required]],
        });
    }

    submit() {
        if (this.formGroup.valid) {
            const formData = this.formGroup.value;
            this.ticketService.create(formData).subscribe({
                next: (ticket: Ticket) => {
                    this.router.navigate(['tickets/ver', ticket.id]);
                },
                error: error => console.error(error),
            })
        }
    }
}