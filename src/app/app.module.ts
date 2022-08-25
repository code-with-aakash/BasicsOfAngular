import { SummaryPipe } from './summary.pipe';
import { BooksService } from './books.service';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    BooksComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
