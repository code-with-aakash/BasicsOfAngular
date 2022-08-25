import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;

  isFavorite : true;
  
  onFavoriteChanged(eventArgs:{ newValue: boolean}){
    console.log("favorite Changed .." +eventArgs.newValue);
  }
  
  
}
