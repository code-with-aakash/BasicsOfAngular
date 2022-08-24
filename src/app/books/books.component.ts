import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books;
  constructor(service : BooksService) {

    this.books =service.getBooks();
   }

  ngOnInit() {
  }

}
