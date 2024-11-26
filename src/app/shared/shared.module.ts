import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags/tags.component';



@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        TagsComponent  // TagsComponent como standalone en imports
    ],
    exports:[
        
    ],
    schemas: [
		NO_ERRORS_SCHEMA,
    ]
})
export class SharedModule { }
