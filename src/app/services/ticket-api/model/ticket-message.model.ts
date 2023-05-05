import { Ticket } from "./ticket.model";
import { User } from "./user.model";

export interface TicketMessage {
    id: number;
    message: string;
    createdAt: Date;
    user: User;
    ticket: Ticket;
}
