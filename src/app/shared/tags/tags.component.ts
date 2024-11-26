import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tags',
    standalone: true,
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})

export class TagsComponent {

    constructor() { }

    @Input() public urlImagen : string = '';
    @Input() public nombreTag : string = '';
    @Input() public enlace : string = '';

    

    ngOnInit(): void {
    }
}

