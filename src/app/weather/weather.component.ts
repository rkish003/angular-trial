import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { finalize } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  isLoading=false;
  cityControl = new FormControl('',Validators.required);
  weatherData:any;

  constructor(private ws:WeatherService){}  

  getWeather(){
    this.isLoading = true;
    const city = this.cityControl.value;
    this.ws.getWeather(city)
    .pipe(finalize( () => {
      this.isLoading = false;
    })) 
    .subscribe(data => {
        this.weatherData = data;
        console.log(data);
    })
  }
}
