import { Component, OnInit, Input } from '@angular/core';
import { WidgetParam } from '../models/widget-param';

@Component({
  selector: 'widget1',
  templateUrl: './widget1.component.html'
})
export class Widget1Component implements OnInit {
    @Input() param : WidgetParam;
    @Input() strParam : string;
  constructor() { }

  ngOnInit() {
  }

}

