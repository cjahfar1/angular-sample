import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { Widget1Component } from './home-component/widget1/widget1.component';
import { Widget2Component } from './home-component/widget2/widget2.component';
import { Widget3Component } from './home-component/widget3/widget3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    Widget1Component,
    Widget2Component,
    Widget3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
