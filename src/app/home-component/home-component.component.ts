import { Component, OnInit, ViewChild } from '@angular/core';
import { WidgetParam } from './models/widget-param';
import { Widget3Component } from './widget3/widget3.component';
import { Widget2Component } from './widget2/widget2.component';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  public WidgetParam: WidgetParam = {
    Param1 : 'p1',
    Param2 : 'p2'
  }
  public str :  string = "I'm empty";

  public updatedValue : WidgetParam = this.WidgetParam;

  @ViewChild(Widget2Component) w2 : Widget2Component;
  constructor() { }

  ngOnInit() {
  }

  onMyFunc() {
    //this.WidgetParam.Param2 = (new Date()).toString();
    this.WidgetParam = {...this.WidgetParam, Param2 : (new Date()).toString()};
    this.str = (new Date()).toString();

  }

  getW2ValueByViewChild() {
    alert(this.w2.myProp);
  }

  onWidgetValueUpdate(newValue : WidgetParam) {
    this.updatedValue = newValue;
  }

}
