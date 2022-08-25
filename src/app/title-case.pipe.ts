import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {

    console.log(`value of string is ${value}`);

    if(!value)
    return null;


    let words = value.split(' ');
    for(var i=0;i<words.length;i++){
    let word = words[i];
      if(i>0 && this.isPreposition(words[i])){
      word=word.toLowerCase(); 
    }

      else{
       word = this.toTitlecase(word);
      }
    }

    return words.join(' ');

  }

  private toTitlecase(word: string):string{

    return   word.substring(0,1).toUpperCase()+ word.substring(1).toLowerCase();
  }

  private isPreposition(words : string): boolean{
    
    let prepositions=[
      'of',
      'the'
    ];

    return prepositions.includes(words.toLowerCase());

  }

}
