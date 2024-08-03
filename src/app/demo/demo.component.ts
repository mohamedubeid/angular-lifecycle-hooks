import { Component, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnInit, 
  SimpleChanges,
  ViewChild, 
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit {
  title: string = 'Demo Component';
  @Input() message: string | undefined;
  @ViewChild('temp') tempPara: ElementRef | undefined;


  constructor(){
    console.log('Demo component constructor called');
    console.log(this.title);
    console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges) {  //it runs every time property or something in the component changed
    console.log('Demo component ngOnChanges Hook called');
    console.log(changes);
  }

  ngOnInit() {                          //it runs Once after ngOnchanges run
    console.log('Demo component ngOnInit Hook called');
    console.log(this.tempPara?.nativeElement.innerHTML);
  }
}