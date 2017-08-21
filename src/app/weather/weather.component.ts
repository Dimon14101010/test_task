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
  value: any;
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
    this.getData.getApi(this.currentCity).subscribe(response => {this.value = response;
    this.currentCity = this.value.city.name;
    console.log('weateher data', response);
    this.days = this.value.list;
    this.options = this.diagram.diagramOptions;
      for (let i = 0 ; i < this.getData.days ; i++) {
        this.valuesDiagramTemp[i] = {'label' : new Date(this.value.list[i].dt * 1000).toLocaleDateString(),
        'value' : this.value.list[i].temp.day};
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
    this.getData.getApi(city).subscribe(response => {this.value = response;
    this.currentCity = city;
      this.days = this.value.list;
      this.options = this.diagram.diagramOptions;
      for (let i = 0 ; i < this.getData.days ; i++) {
        this.valuesDiagramTemp[i] = {'label' : new Date(this.value.list[i].dt * 1000).toLocaleDateString(),
          'value' : this.value.list[i].temp.day};
      }
      this.data = [
        {
          key: "Cumulative Return",
          values: this.valuesDiagramTemp
        }
      ];
    });
  console.log(city, this.value.list);
  }
  toPressure () {
    console.log(this.currentCity)

    this.getData.getApi(this.currentCity).subscribe(response => {this.value = response;
    this.options = this.diagram.diagramOptions;
    this.days = this.value.list;
    for (let i = 0 ; i < this.getData.days ; i++) {
      this.valuesDiagramPress[i] = {'label' : new Date(this.value.list[i].dt * 1000).toLocaleDateString(),
        'value' : this.value.list[i].pressure};
    }

      this.data = [
        {
          key: "Cumulative Return",
          values: this.valuesDiagramPress
        }
      ];
    });
  }
  toTemp () {
    this.options = this.diagram.diagramOptions;
    this.data = [
      {
        key: "Cumulative Return",
        values: this.valuesDiagramTemp
      }
    ];
  }
}
