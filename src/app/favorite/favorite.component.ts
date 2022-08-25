import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  
  styles:[
    `
    .glyphicon{
      color : green
    }
    `
  ],
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

@Input('isFavorite') isFavorite : boolean;
@Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite=!this.isFavorite;
    this.change.emit({ newValue : this.isFavorite });
  }

}