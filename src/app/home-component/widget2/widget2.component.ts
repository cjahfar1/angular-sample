import { Component, OnInit, Input } from '@angular/core';
import { WidgetParam } from '../models/widget-param';

@Component({
  selector: 'widget2',
  templateUrl: './widget2.component.html'
})
export class Widget2Component implements OnInit {
    private param : WidgetParam;
    @Input() 
    set paramval(p : WidgetParam) {
      console.log('widget2: values changed');
      // we can write our logic here
      this.param = p;
    }
    
    @Input() strParam : string;

    public myProp : string = "It's my property";
  constructor() { }

  ngOnInit() {
  }

}

