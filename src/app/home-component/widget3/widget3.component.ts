import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WidgetParam } from '../models/widget-param';

@Component({
  selector: 'widget3',
  templateUrl: './widget3.component.html'
})
export class Widget3Component implements OnInit {
    @Input() param : WidgetParam;
    @Input() strParam : string;

    @Output() onValueUpdate = new EventEmitter<WidgetParam>();
  constructor() { }

  ngOnInit() {
  }

  updateValue() {
    let newValue = {...this.param, Param2: "I'm updated from widget 3" + (new Date()).getMilliseconds()};
    //this.param.Param2 = "I'm updated from widget 3" + (new Date()).getMilliseconds();
    this.onValueUpdate.emit(newValue);
  }
}

