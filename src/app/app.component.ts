import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[
    `
    .glyphicon{
      color : green
    }
    `
  ]
})
export class AppComponent {
  title : string;

  isFavorite : true;
  
  onFavoriteChanged(eventArgs:{ newValue: boolean}){
    console.log("favorite Changed .." , eventArgs);
  }
  
  
}
