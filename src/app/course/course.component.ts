import { CoursesService } from './../courses.service';
import { CoursesComponent } from './../courses.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
courses;
  constructor( service : CoursesService) {

    this.courses=service.getCourses();
   }

  ngOnInit() {
  }

}
