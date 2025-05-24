import { HttpClient } from '@angular/common/http';
import { importProvidersFrom, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
apiKey = 'c2e7daa8762790ac82cba7cc08a5354b';
    
  constructor(private http:HttpClient) { 
  }

  getWeather(city:any){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
  }
}
