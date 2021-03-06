import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GetDataService} from "../get-data.service";
import {WeatherDiagrammService} from "./weather-diagramm.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnInit {
  autocomplete: google.maps.places.Autocomplete;
  valueDaily: any;
  valueNow: any;
  days: any = [];
  options;
  data;
  valuesDiagramTemp = [];
  valuesDiagramPress = [];
  currentCity;
  constructor (private getData: GetDataService, private diagram: WeatherDiagrammService) {}
  initialized(autocomplete: any) {
    this.autocomplete = autocomplete;
  }
  ngOnInit () {
    this.getData.getWeatherNow(this.currentCity).subscribe(response => this.valueNow = response);
    this.getData.getWeatherDaily(this.currentCity).subscribe(response => {this.valueDaily = response;
    this.currentCity = this.valueDaily.city.name;
    console.log('weateher data', response);
    this.days = this.valueDaily.list;
    this.options = this.diagram.diagramOptions;
      for (let i = 0 ; i < this.getData.days ; i++) {
        this.valuesDiagramTemp[i] = {'label' : new Date(this.valueDaily.list[i].dt * 1000).toLocaleDateString(),
        'value' : this.valueDaily.list[i].temp.day};
        console.log('values' , this.valuesDiagramTemp);
      }
    this.data = [
      {
        key: "Cumulative Return",
        values: this.valuesDiagramTemp
      }
    ];
    });
  }
  changeCity (event, city) {
    this.getData.getWeatherNow(city).subscribe(response => this.valueNow = response);
    this.getData.getWeatherDaily(city).subscribe(response => {this.valueDaily = response;
    this.currentCity = city;
      this.days = this.valueDaily.list;
      for (let i = 0 ; i < this.getData.days ; i++) {
        this.valuesDiagramTemp[i] = {'label' : new Date(this.valueDaily.list[i].dt * 1000).toLocaleDateString(),
          'value' : this.valueDaily.list[i].temp.day};
      }
      this.data = [
        {
          key: "Cumulative Return",
          values: this.valuesDiagramTemp
        }
      ];
    });
  console.log(city, this.valueDaily.list);
  }
  toPressure () {
    for (let i = 0 ; i < this.getData.days ; i++) {
      this.valuesDiagramPress[i] = {'label' : new Date(this.valueDaily.list[i].dt * 1000).toLocaleDateString(),
        'value' : this.valueDaily.list[i].pressure};
    }
      this.diagram.diagramOptions.chart.yAxis.axisLabel = 'pressure';
      this.data = [
        {
          key: "Cumulative Return",
          values: this.valuesDiagramPress
        }
      ];
  }
  toTemp () {
    this.diagram.diagramOptions.chart.yAxis.axisLabel = 'temperature';
    this.data = [
      {
        key: "Cumulative Return",
        values: this.valuesDiagramTemp
      }
    ];
  }
}
