import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Configuration } from "../configuration.class";
import { CreateTicketDto, Ticket, TicketMessage } from "../model";
import { CreateTicketMessageDto } from "../model/dto/create-ticket-message.dto";

@Injectable()
export class TicketService extends Configuration {
    protected override base: string = 'tickets';

    constructor(private httpClient: HttpClient) {
        super();
    }

    create(createTicketDto: CreateTicketDto): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/${this.base}`, createTicketDto);
    }

    find(): Observable<Ticket[]> {
        return this.httpClient.get<Ticket[]>(`${this.apiUrl}/${this.base}`);
    }

    findById(id: number): Observable<Ticket> {
        return this.httpClient.get<Ticket>(`${this.apiUrl}/${this.base}/${id}`);
    }

    findMessages(id: number): Observable<TicketMessage[]> {
        return this.httpClient.get<TicketMessage[]>(`${this.apiUrl}/${this.base}/${id}/messages`);
    }

    createMessage(id: number, createTicketMessageDto: CreateTicketMessageDto): Observable<TicketMessage> {
        return this.httpClient.post<TicketMessage>(`${this.apiUrl}/${this.base}/${id}/messages`, createTicketMessageDto);
    }
}