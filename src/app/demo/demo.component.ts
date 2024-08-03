import { AfterContentInit, Component, 
  ContentChild, 
  DoCheck, 
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
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit {
  title: string = 'Demo Component';
  @Input() message: string | undefined;
  @ViewChild('temp') tempPara: ElementRef | undefined;
  @ContentChild('temp') paraContent: ElementRef | undefined;


  constructor(){
    console.log('Demo component constructor called');
    console.log(this.title);
    console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges) {  //it runs every time property or something in the component changed
    console.log('Demo component ngOnChanges Hook called');
    console.log(changes);
  }

  ngOnInit() {                          //it runs --Once-- after ngOnchanges run
    console.log('Demo component ngOnInit Hook called');
    console.log('In ngOnInit', this.tempPara?.nativeElement);
  }

  ngDoCheck() {                         //it runs during every change detection cycle even if there is no change in input bound properties. it runs after ngOnChanges and ngOnInit.
    console.log('Demo component ngDoCheck Hook called');
    console.log('In ngDoCheck', this.paraContent?.nativeElement);
  }

  ngAfterContentInit() {                //it runs --Once-- after the components projected content has been fully initialized.
    console.log('Demo component ngAfterContentInit Hook called');
    console.log('In ngAfterContentInit', this.paraContent?.nativeElement);
  }
}