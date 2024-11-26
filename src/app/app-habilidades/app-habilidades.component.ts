import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TagsComponent } from '../shared/tags/tags.component';

@Component({
  selector: 'app-app-habilidades',
  standalone: true,
  imports: [TagsComponent],
  templateUrl: './app-habilidades.component.html',
  styleUrl: './app-habilidades.component.scss'
})
export class AppHabilidadesComponent {

}


//redireccionar a sitios web al hacer click en enlace?
//pasar a un for el html y darle los datos de habilidades con un  objeto q tenga nombre y url, enlace si ponemos