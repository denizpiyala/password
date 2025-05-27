import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'password';
  
  password:string = 'deniz';
  buttonClick() {
    this.password = 'diniz piyala';
     
    console.log("event binding i öğreniyorum");
  } //fonksiyon ismiyele yapmak istediğimiz işlemi yazıyoruz.
  getPassword()
  {
    return this.password;
  }

  getName()
  {
    return 'Hilal';
  }


}
 
  

