import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { TicektStatus, Ticket, TicketApiModule, TicketMessage, TicketService } from "src/app/services/ticket-api";
import { MessageFormComponent } from "../message-form/message-form.component";
import { MessageListComponent } from "../message-list/message-list.component";
import { MessageMainComponent } from "../message-main/message-main.component";

@Component({
    selector: 'ticket-view-form',
    standalone: true,
    templateUrl: './ticket-view-form.component.html',
    styleUrls: ['./ticket-view-form.component.css'],
    imports: [
        CommonModule,
        TicketApiModule,
        MessageFormComponent,
        MessageListComponent,
        MessageMainComponent,
    ]
})
export class TicketViewFormComponent implements OnInit {
    @Input() ticket!: Ticket;
    @Input() messages!: TicketMessage[];
    mainMessage!: TicketMessage | undefined;
    showForm: boolean = false;

    constructor(private ticketService: TicketService) { }

    ngOnInit(): void {
        console.log(this.ticket);
        if (this.ticket)
            this.getMessages();
    }

    getMessages() {
        this.ticketService.findMessages(this.ticket?.id).subscribe({
            next: (messages: TicketMessage[]) => {
                this.mainMessage = messages.pop();
                this.messages = messages;
            },
            error: error => console.error(error),
        });
    }

    updateMessages(message: TicketMessage) {
        this.showForm = false;
        this.ticket.status = message.ticket.status;
        this.messages = [message, ...this.messages];
    }

    showAnswerButton() {
        return !this.showForm && this.ticket && this.ticket.status === TicektStatus.OPEN;
    }

    toggleAnswerForm() {
        this.showForm = !this.showForm;
    }
}
