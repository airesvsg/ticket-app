import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TicketMessage } from "src/app/services/ticket-api";

@Component({
    selector: 'message-list',
    standalone: true,
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css'],
    imports: [CommonModule],
})
export class MessageListComponent {
    @Input() messages!: TicketMessage[];
}
