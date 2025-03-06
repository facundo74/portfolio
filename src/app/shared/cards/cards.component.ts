import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
    constructor() { }

    @Input() public titulo : string = '';
    @Input() public descripcion : string = '';
    @Input() public link : string = '';

    ngOnInit(): void {
    }
}
