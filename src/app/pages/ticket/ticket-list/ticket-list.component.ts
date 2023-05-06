import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Ticket, TicketService } from "src/app/services/ticket-api";

@Component({
    selector: 'app-ticket-list',
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit, OnDestroy {
    tickets: Ticket[] = [];
    ticket$!: Subscription;

    constructor(private ticketService: TicketService) { }

    ngOnInit(): void {
        this.ticket$ = this.ticketService.find().subscribe({
            next: (tickets: Ticket[]) => {
                this.tickets = tickets;
            },
            error: (error) => console.error(error),
        });
    }

    ngOnDestroy(): void {
        this.ticket$.unsubscribe();
    }
}