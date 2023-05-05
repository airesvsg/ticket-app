import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Configuration } from "../configuration.class";
import { CreateUserDto } from "../model";

@Injectable()
export class UserService extends Configuration {
    protected override base: string = 'users';

    constructor(private httpClient: HttpClient) {
        super();
    }

    create(createUser: CreateUserDto): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/${this.base}`, createUser);
    }
}