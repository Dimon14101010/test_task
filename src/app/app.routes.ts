import {Routes} from "@angular/router";
import {AppResolver} from "./app.resolver";
import {WeatherComponent} from "./weather/weather.component";

export const routes: Routes = [
  {path: '' , component: WeatherComponent , resolve: {dataResolve: AppResolver}}
]
