import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {GetDataService} from "./get-data.service";
import {AppResolver} from "./app.resolver";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import { WeatherComponent } from './weather/weather.component';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NguiMapModule } from '@ngui/map';
import {WeatherDiagrammService} from "./weather/weather-diagramm.service";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NvD3Module,
    ReactiveFormsModule,
    FormsModule,
    NguiMapModule.forRoot({
      apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDEoWdHxrHdByZBns7_34cPl9KWY7c3sUI&libraries=visualization,places,drawing'
    })
  ],
  providers: [GetDataService, AppResolver, WeatherDiagrammService],
  bootstrap: [AppComponent]
})
export class AppModule { }
