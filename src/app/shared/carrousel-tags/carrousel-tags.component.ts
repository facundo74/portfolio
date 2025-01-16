import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel-tags',
  imports: [CommonModule],
  templateUrl: './carrousel-tags.component.html',
  styleUrl: './carrousel-tags.component.scss'
})
export class CarrouselTagsComponent implements OnInit{

    @Input()
    public tags: any[] = [];

    public ngOnInit(){
      console.log("inputs", this.tags)

    }
    
}
