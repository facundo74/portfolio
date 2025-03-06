import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags/tags.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        TagsComponent
    ],
    exports:[
        CommonModule,
        MatButtonModule,
        TagsComponent
    ],
    schemas: [
		NO_ERRORS_SCHEMA,
    ]
})
export class SharedModule { }
