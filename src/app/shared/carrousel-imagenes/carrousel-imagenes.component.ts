import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CarrouselComponent } from '../carrousel/carrousel.component';

@Component({
  selector: 'app-carrousel-imagenes',
  templateUrl: './carrousel-imagenes.component.html',
  styleUrls: ['./carrousel-imagenes.component.scss']
})
export class CarrouselImagenesComponent implements OnInit {

    @ViewChild('carrousel', {static:true})
    public carrousel!: CarrouselComponent;

    @Input()
    public imagenes: any;

    @Input()
    public autoScrollWaitTime: number = 0;

    @Input()
    public mostrarPosicion: boolean = true;

    @Input()
    public mostrarControles: boolean = true;

    constructor(
    ) { }

    ngOnInit(): void {
    }
}
