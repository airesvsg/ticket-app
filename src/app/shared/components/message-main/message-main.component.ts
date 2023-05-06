import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Ticket, TicketMessage } from "src/app/services/ticket-api";

@Component({
    selector: 'message-main',
    standalone: true,
    templateUrl: './message-main.component.html',
    styleUrls: ['./message-main.component.css'],
    imports: [CommonModule],
})
export class MessageMainComponent {
    @Input() ticket!: Ticket;
    @Input() message!: TicketMessage | undefined;
}