import { Component } from "@angular/core";

@Component({
    selector: 'not-found',
    standalone: true,
    styles: [':host{text-align:center}'],
    template: `<h1>404</h1><p>Página inexistente!</p>`
})
export class NotFoundComponent { }
