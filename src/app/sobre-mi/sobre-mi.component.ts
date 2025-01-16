import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [CommonModule],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss'
})
export class SobreMiComponent {
  isDarkMode = false;

  cambiarColor(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}
