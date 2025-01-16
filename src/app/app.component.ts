import { Component, HostListener, OnInit, signal } from '@angular/core';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title(title: any) {
      throw new Error('Method not implemented.');
    }
    isLeftSidebarCollapsed = signal<boolean>(false);
    screenWidth = 500;//signal<number>(window.innerWidth);


    ngOnInit(): void {
        this.isLeftSidebarCollapsed.set(this.screenWidth < 768);
    }

    changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
        this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
    }
}