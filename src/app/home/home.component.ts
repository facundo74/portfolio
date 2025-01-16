import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ApiService } from '../shared/services/api-service.service';
import { AppEducacionComponent } from "../app-educacion/app-educacion.component";
import { AppExperienciasComponent } from "../app-experiencias/app-experiencias.component";
import { AppHabilidadesComponent } from "../app-habilidades/app-habilidades.component";
import moment from 'moment';
import { SobreMiComponent } from "../sobre-mi/sobre-mi.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, AppEducacionComponent, AppExperienciasComponent, AppHabilidadesComponent, SobreMiComponent]
})
export class HomeComponent {
    public year :any;

    constructor(
    ) {}

    ngOnInit(): void {
        console.log("enmtro init")
        //this.apiService.post();
        this.year = moment().year();
	}
}
