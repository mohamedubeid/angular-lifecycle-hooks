import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, 
  ContentChild, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges,
  ViewChild, 
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title: string = 'Demo Component';
  @Input() message: string | undefined;
  @ContentChild('temp') paraContent: ElementRef | undefined;
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

  ngOnInit() {                          //it runs --Once-- after ngOnchanges run
    console.log('Demo component ngOnInit Hook called');
    console.log('In ngOnInit', this.paraContent?.nativeElement, ' @ContentChild');
    console.log('In ngOnInit', this.tempPara?.nativeElement, '  @ViewChild');
  }

  ngDoCheck() {                         //it runs --during every change detection cycle even if there is no change in input bound properties.-- it runs after ngOnChanges and ngOnInit.
    console.log('Demo component ngDoCheck Hook called');
    console.log('In ngDoCheck', this.paraContent?.nativeElement, ' @ContentChild');
    console.log('In ngDoCheck', this.tempPara?.nativeElement, '  @ViewChild');
  }

  ngAfterContentInit() {                //it runs --Once-- after the components projected content has been fully initialized.             component only hook
    console.log('Demo component ngAfterContentInit Hook called');
    console.log('In ngAfterContentInit', this.paraContent?.nativeElement, '@ContentChild');
    console.log('In ngAfterContentInit', this.tempPara?.nativeElement, '  @ViewChild');
  }

  ngAfterContentChecked() {             //it runs --during every change detection cycle even if there is no change in input bound properties.-- after the components projected content has been fully initialized.     @ContentChild and @ContentChildren   component only hook
    console.log('Demo component ngAfterContentChecked Hook called');
    console.log('In ngAfterContentChecked', this.paraContent?.nativeElement, '@ContentChild');
    console.log('In ngAfterContentChecked', this.tempPara?.nativeElement.innerHTML, '  @ViewChild');
  }

  ngAfterViewInit() {                  //it runs --Once-- after the components veiw template and all its child components view templates are fully initialized.       @ViewChild and @ViewChildren          component only hook
    console.log('Demo component ngAfterViewInit Hook called');
    console.log('In ngAfterViewInit', this.paraContent?.nativeElement, '@ContentChild');
    console.log('In ngAfterViewInit', this.tempPara?.nativeElement.innerHTML, '  @ViewChild');
  }

  ngAfterViewChecked() {                  //it runs --during every change detection cycle-- after the components veiw template and all its child components view templates are fully initialized.       @ViewChild and @ViewChildren          component only hook
    console.log('Demo component ngAfterViewChecked Hook called');
    console.log('In ngAfterViewChecked', this.paraContent?.nativeElement, '@ContentChild');
    console.log('In ngAfterViewChecked', this.tempPara?.nativeElement.innerHTML, '  @ViewChild');
  }

  ngOnDestroy() {
    console.log('Demo component ngOnDestroy Hook called***************************************');
  }
}