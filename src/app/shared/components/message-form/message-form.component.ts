import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { TicketApiModule, TicketMessage, TicketService } from "src/app/services/ticket-api";

@Component({
    selector: 'message-form',
    standalone: true,
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.css'],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TicketApiModule,
    ],
})
export class MessageFormComponent implements OnInit {
    @Input() ticketId!: number;
    @Output() ticketMessage: EventEmitter<TicketMessage> = new EventEmitter<TicketMessage>();
    @Output() onCancel: EventEmitter<boolean> = new EventEmitter<boolean>();

    formGroup!: FormGroup;

    constructor(
        private ticketService: TicketService,
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            message: [null, [Validators.required]],
            close: [null]
        });
    }

    submit() {
        if (this.formGroup.valid) {
            this.ticketService.createMessage(this.ticketId, this.formGroup.value)
                .subscribe({
                    next: (message: TicketMessage) => {
                        this.formGroup.reset();
                        this.ticketMessage.emit(message);
                    },
                    error: error => console.error(error),
                });
        }
    }

    cancel() {
        this.onCancel.emit(true);
    }
}