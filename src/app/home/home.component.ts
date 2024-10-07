import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ApiService } from '../shared/services/api-service.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent]
})
export class HomeComponent {
    constructor(
    ) {}

    ngOnInit(): void {
        console.log("enmtro init")
        //this.apiService.post();
	}
}
