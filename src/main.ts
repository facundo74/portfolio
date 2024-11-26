import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AppExperienciasComponent } from './app/app-experiencias/app-experiencias.component';
import { AppEducacionComponent } from './app/app-educacion/app-educacion.component';
import { AppHabilidadesComponent } from './app/app-habilidades/app-habilidades.component';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [
    routes, // Configura las rutas aquí
    AppHabilidadesComponent, // Asegúrate de declarar tus componentes en el `providers`
    AppEducacionComponent,
    AppExperienciasComponent
  ],
}).catch(err => console.error(err));