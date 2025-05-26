import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
modify() {
throw new Error('Method not implemented.');
}
  title = 'password';
  buttonClick() {
    console.log("event binding i öğreniyorum");
  } //fonksiyon ismiyele yapmak istediğimiz işlemi yazıyoruz.
}
 
  

