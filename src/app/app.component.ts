import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  lenght:number = 0;
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSymbols:boolean = false;

  modifyLenght(value: string) {
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue))
      {
      debugger;
      this.lenght = parsedValue;

    }
  }

  modifyLetters()
  {
    this.includeLetters = !this.includeLetters;

  }
  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  modifySybols(){
    this.includeSymbols = !this.includeSymbols;
  }
  buttonClick() {

    console.log(`değerlerim,
      Letters: ${this.includeLetters}
      Numbers: ${this.includeNumbers}
      Symbols: ${this.includeSymbols}
      `);
  } 
}
 
  

