import { CommonModule } from "@angular/common";
import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'page-header',
    standalone: true,
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.css'],
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule],
})
export class PageHeaderComponent {
    @Input() title = '';
}
