import {Injectable} from "@angular/core";

@Injectable ()

export class WeatherDiagrammService {

  diagramOptions = {
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
}
