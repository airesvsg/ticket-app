import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Configuration } from "../configuration.class";
import { SignIn, SignInDto } from "../model";

@Injectable({
    providedIn: 'root'
})
export class AuthService extends Configuration {
    protected override base: string = 'auth';

    private accessTokenKey: string = 'accessToken';

    constructor(private httpClient: HttpClient) {
        super();
    }

    login(signInDto: SignInDto): Observable<SignIn> {
        return this.httpClient.post<SignIn>(`${this.apiUrl}/${this.base}/login`, signInDto);
    }

    logout(): void {
        localStorage.removeItem(this.accessTokenKey);
    }

    store(signIn: SignIn): void {
        localStorage.setItem(this.accessTokenKey, signIn.accessToken);
    }

    getAccessToken(): string | null {
        return localStorage.getItem(this.accessTokenKey);
    }

    isLoggedIn() {
        return this.getAccessToken() !== null;
    }
}