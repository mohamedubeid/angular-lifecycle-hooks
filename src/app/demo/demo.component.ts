import { Component, 
  Input, 
  OnChanges, 
  SimpleChanges, 
  OnInit, 
  ViewChild, 
  ElementRef, 
  DoCheck, 
  AfterContentInit, 
  ContentChild, 
  AfterContentChecked,
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges {
  title: string = 'Demo Component';
  @Input() message: string | undefined;


  constructor(){
    console.log('Demo component constructor called');
    console.log(this.title);
    console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Demo component ngOnChanges Hook called');
    console.log(changes);
  }
}