import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GetDataService} from "../get-data.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnInit {
  autocomplete: google.maps.places.Autocomplete;
  value: any;
  days: any;
  options;
  data;
  currentCity;
  constructor (private getData: GetDataService) {}
  initialized(autocomplete: any) {
    this.autocomplete = autocomplete;
  }
  ngOnInit () {
    this.getData.getApi('').subscribe(response => {this.value = response;
    console.log('weateher data', this.value);
    this.days = this.value.list;
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label; },
        y: function(d){return d.value; },
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.2f')(d);
        },
        duration: 700,
        xAxis: {
          axisLabel: 'days'
        },
        yAxis: {
          axisLabel: 'temperature',
          axisLabelDistance: -10
        }
      }
    };
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : new Date(this.value.list[0].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[0].temp.max
          },
          {
            "label" : new Date(this.value.list[1].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[1].temp.day
          },
          {
            "label" : new Date(this.value.list[2].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[2].temp.day
          },
          {
            "label" : new Date(this.value.list[3].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[3].temp.day
          },
          {
            "label" : new Date(this.value.list[4].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[4].temp.day
          },
          {
            "label" : new Date(this.value.list[5].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[5].temp.day
          },
          {
            "label" : new Date(this.value.list[6].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[6].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[7].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[7].temp.day
          },
          {
            "label" : new Date(this.value.list[8].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[8].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[9].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[9].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[10].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[10].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[11].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[11].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[12].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[12].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[13].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[13].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[14].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[14].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[15].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[15].temp.day
          }
        ]
      }
    ];
    });
  }
  changeCity (event, city) {
    this.data.newCity = city;
    this.currentCity = city;
    this.getData.getApi(city).subscribe(response => {this.value = response;
      this.days = this.value.list;
      this.options = {
        chart: {
          type: 'discreteBarChart',
          height: 450,
          margin : {
            top: 20,
            right: 20,
            bottom: 50,
            left: 55
          },
          x: function(d){return d.label; },
          y: function(d){return d.value; },
          showValues: true,
          valueFormat: function(d){
            return d3.format(',.2f')(d);
          },
          duration: 500,
          xAxis: {
            axisLabel: 'days'
          },
          yAxis: {
            axisLabel: 'temperature',
            axisLabelDistance: -10
          }
        }
      };
      this.data = [
        {
          key: "Cumulative Return",
          values: [
            {
              "label" : new Date(this.value.list[0].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[0].temp.max
            },
            {
              "label" : new Date(this.value.list[1].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[1].temp.day
            },
            {
              "label" : new Date(this.value.list[2].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[2].temp.day
            },
            {
              "label" : new Date(this.value.list[3].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[3].temp.day
            },
            {
              "label" : new Date(this.value.list[4].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[4].temp.day
            },
            {
              "label" : new Date(this.value.list[5].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[5].temp.day
            },
            {
              "label" : new Date(this.value.list[6].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[6].temp.day
            }
            ,
            {
              "label" : new Date(this.value.list[7].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[7].temp.day
            },
            {
              "label" : new Date(this.value.list[8].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[8].temp.day
            }
            ,
            {
              "label" : new Date(this.value.list[9].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[9].temp.day
            }
            ,
            {
              "label" : new Date(this.value.list[10].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[10].temp.day
            }
            ,
            {
              "label" : new Date(this.value.list[11].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[11].temp.day
            }
            ,
            {
              "label" : new Date(this.value.list[12].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[12].temp.day
            }
            ,
            {
              "label" : new Date(this.value.list[13].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[13].temp.day
            }
            ,
            {
              "label" : new Date(this.value.list[14].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[14].temp.day
            }
            ,
            {
              "label" : new Date(this.value.list[15].dt * 1000).toLocaleDateString(),
              "value" : this.value.list[15].temp.day
            }
          ]
        }
      ];
    });
  console.log(city, this.value.list);
  }
  toPressure () {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label; },
        y: function(d){return d.value; },
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.2f')(d);
        },
        duration: 700,
        xAxis: {
          axisLabel: 'days'
        },
        yAxis: {
          axisLabel: 'pressure',
          axisLabelDistance: -10
        }
      }
    };
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : new Date(this.value.list[0].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[0].pressure
          },
          {
            "label" : new Date(this.value.list[1].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[1].pressure
          },
          {
            "label" : new Date(this.value.list[2].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[2].pressure
          },
          {
            "label" : new Date(this.value.list[3].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[3].pressure
          },
          {
            "label" : new Date(this.value.list[4].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[4].pressure
          },
          {
            "label" : new Date(this.value.list[5].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[5].pressure
          },
          {
            "label" : new Date(this.value.list[6].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[6].pressure
          }
          ,
          {
            "label" : new Date(this.value.list[7].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[7].pressure
          },
          {
            "label" : new Date(this.value.list[8].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[8].pressure
          }
          ,
          {
            "label" : new Date(this.value.list[9].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[9].pressure
          }
          ,
          {
            "label" : new Date(this.value.list[10].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[10].pressure
          }
          ,
          {
            "label" : new Date(this.value.list[11].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[11].pressure
          }
          ,
          {
            "label" : new Date(this.value.list[12].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[12].pressure
          }
          ,
          {
            "label" : new Date(this.value.list[13].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[13].pressure
          }
          ,
          {
            "label" : new Date(this.value.list[14].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[14].pressure
          }
          ,
          {
            "label" : new Date(this.value.list[15].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[15].pressure
          }
        ]
      }
    ];
  }
  toTemp () {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label; },
        y: function(d){return d.value; },
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.2f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'days'
        },
        yAxis: {
          axisLabel: 'temperature',
          axisLabelDistance: -10
        }
      }
    };
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : new Date(this.value.list[0].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[0].temp.max
          },
          {
            "label" : new Date(this.value.list[1].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[1].temp.day
          },
          {
            "label" : new Date(this.value.list[2].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[2].temp.day
          },
          {
            "label" : new Date(this.value.list[3].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[3].temp.day
          },
          {
            "label" : new Date(this.value.list[4].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[4].temp.day
          },
          {
            "label" : new Date(this.value.list[5].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[5].temp.day
          },
          {
            "label" : new Date(this.value.list[6].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[6].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[7].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[7].temp.day
          },
          {
            "label" : new Date(this.value.list[8].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[8].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[9].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[9].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[10].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[10].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[11].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[11].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[12].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[12].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[13].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[13].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[14].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[14].temp.day
          }
          ,
          {
            "label" : new Date(this.value.list[15].dt * 1000).toLocaleDateString(),
            "value" : this.value.list[15].temp.day
          }
        ]
      }
    ];
  }
}
