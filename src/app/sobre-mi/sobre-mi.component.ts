import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-sobre-mi',
  imports: [SharedModule],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss'
})
export class SobreMiComponent {
  isDarkMode = false;

  cambiarColor(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}
