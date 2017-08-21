import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {GetDataService} from "./get-data.service";

@Injectable ()
export class AppResolver implements Resolve<any> {
  constructor (private data: GetDataService) {}

  resolve () {
    return this.data.getWeatherDaily('');
  }
}
