import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TagsComponent } from '../shared/tags/tags.component';
import { CarrouselTagsComponent } from "../shared/carrousel-tags/carrousel-tags.component";

@Component({
  selector: 'app-app-habilidades',
  standalone: true,
  imports: [TagsComponent, CarrouselTagsComponent],
  templateUrl: './app-habilidades.component.html',
  styleUrl: './app-habilidades.component.scss'
})
export class AppHabilidadesComponent {
    tags = [
        { imagenUrl: 'assets/tools/angular.png', nombreTag: 'Angular' },
        { imagenUrl: 'assets/tools/html.png', nombreTag: 'HTML' },
        { imagenUrl: 'assets/tools/css.png', nombreTag: 'CSS' },
        { imagenUrl: 'assets/tools/flutter.png', nombreTag: 'FLUTTER' },
        { imagenUrl: 'assets/tools/git.png', nombreTag: 'GIT' },
        { imagenUrl: 'assets/tools/aws.png', nombreTag: 'AWS' },
        { imagenUrl: 'assets/tools/laravel.png', nombreTag: 'Laravel' },
        { imagenUrl: 'assets/tools/dbeaver.png', nombreTag: 'DBeaver' },
        { imagenUrl: 'assets/tools/postman.png', nombreTag: 'POSTMAN' }
    ];
}


//redireccionar a sitios web al hacer click en enlace?
//pasar a un for el html y darle los datos de habilidades con un  objeto q tenga nombre y url, enlace si ponemos