import { environment } from "src/environments/environment";

export class Configuration {
    protected apiUrl = environment.ticketApiUrl;
    protected base = '';
}
