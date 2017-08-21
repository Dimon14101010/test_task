import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

@Injectable ()
export class GetDataService {
  defCity = 'Dnipropetrovsk';
  days = 16;
  constructor (private http: HttpClient) {}
  getApi (city) {
    if (!city) {
      city = this.defCity;
    }
    const params = new HttpParams()
      .set ('q' , city)
      .set ('APPID' , 'bd5e378503939ddaee76f12ad7a97608')
      .set ('cnt' , this.days.toString())
      .set ('units' , 'metric');
    return this.http.get
    ('http://api.openweathermap.org/data/2.5/forecast/daily' , {params})

  }
}
