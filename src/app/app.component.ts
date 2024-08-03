import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-lifecycle-hook';
  inputVal: string = '';
  toDestroy: boolean = false;

  constructor(){
    console.log('App Component constructor called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Hook of app component called');
  }

  ngAfterViewChecked() {                  //it runs --during every change detection cycle-- after the components veiw template and all its child components view templates are fully initialized.       @ViewChild and @ViewChildren          component only hook
    console.log('ngAfterViewChecked Hook of app component called');

  }

  onBtnCilcked(inputEl: HTMLInputElement) {
    // this.inputVal = inputEl.value;
  }

  DestroyComponent() {
    this.toDestroy = !this.toDestroy;
  }
}