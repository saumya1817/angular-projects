import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedCityName: string = 'Select';
  weatherInfo: {date: Date, minTemp: string, maxTemp: string}[] = [];
  showWeatherTable: boolean = false;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    const city = form.value.selectedCityName;
    this.weatherService.getWeather(city).subscribe(
      (data)=>{
        if (data?.daily?.time && data.daily.temperature_2m_min && data.daily.temperature_2m_max) {
          // Clear previous weather info
          this.weatherInfo = [];
          this.showWeatherTable = true;
          // Iterate through the data
          for (let i = 0; i < data.daily.time.length; i++) {
            this.weatherInfo.push({
              date: data.daily.time[i],
              minTemp: data.daily.temperature_2m_min[i],
              maxTemp: data.daily.temperature_2m_max[i],
            });
          }
        } else {
          console.error('Invalid weather data structure:', data);
        }
      }
    );
  }
}
