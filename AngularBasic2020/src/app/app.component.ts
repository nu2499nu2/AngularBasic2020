import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome To Angular Basic 2020';
  i: number = 0;
  showMessage() {
    return this.title;
  }
  addCount() {
    this.i++;
  }
  readData(value) {
    console.log(value);
  }
}
