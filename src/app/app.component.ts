import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lifecycle-hook';
  inputVal: string = '';

  constructor(){
    console.log('App Component constructor called!');
  }

  onBtnCilcked(inputEl: HTMLInputElement) {
    // this.inputVal = inputEl.value;
  }
}