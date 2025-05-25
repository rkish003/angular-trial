import { Component, Inject, Input } from '@angular/core';
import {
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css'
})
export class WeatherDetailsComponent {
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  
}
