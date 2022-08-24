import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    //string interpolation
    // template: '<h2>{{ "Title:" +getTitle() +"--" }}</h2>'
    template:
    `
   {{ text | summary:2 }}

    `
})
export class CoursesComponent {

   text =`abcdrf jojjdndikdn jdidjdik jdidjidj`
}