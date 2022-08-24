import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  

    getBooks(){
      return ["book1","book2","book3"];
    
   }
}
