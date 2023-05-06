import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Ticket, TicketMessage, TicketService } from "src/app/services/ticket-api";

@Component({
    selector: 'app-ticket-view',
    templateUrl: './ticket-view.component.html',
    styleUrls: ['./ticket-view.component.css'],
})
export class TicketViewComponent implements OnInit {
    ticketId!: number;
    ticket!: Ticket;
    mainMessage!: TicketMessage | undefined;
    messages!: TicketMessage[];
    showForm: boolean = false;

    constructor(
        private ticketService: TicketService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.ticketId = this.activatedRoute.snapshot.params['id'] || 0;
        this.getTicket();
    }

    getTicket() {
        this.ticketService.findById(this.ticketId).subscribe({
            next: (ticket: Ticket) => this.ticket = ticket,
            error: error => console.error(error),
        });
    }
}