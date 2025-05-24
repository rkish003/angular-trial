import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  city!:String;
  weatherData:any;
  constructor(private ws:WeatherService){}  
  getWeather(){
    this.ws.getWeather(this.city)
    .subscribe(data => {
        this.weatherData = data;
        console.log(data);
    })
  }
}
