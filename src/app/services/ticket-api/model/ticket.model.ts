import { User } from "./user.model";

export interface Ticket {
    id: number;
    title: string;
    user: User;
    status: string;
    createdAt: Date;
}
