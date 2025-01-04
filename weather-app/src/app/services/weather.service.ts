import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  getWeatherApiURL = 'https://api.open-meteo.com/v1/forecast';

  constructor(
    private http: HttpClient
  ) { }

  getWeather(city: string): Observable<any>{

    const cityCoordinates: { [key: string]: { lat: number; lon: number } } = {
      NYC: { lat: 40.7128, lon: -74.0060 },
      London: { lat: 51.5074, lon: -0.1278 },
      Tokyo: { lat: 35.6895, lon: 139.6917 },
      Sydney: { lat: -33.8688, lon: 151.2093 },
    };
  
    const { lat, lon } = cityCoordinates[city];

    return this.http.get<any>(this.getWeatherApiURL+
            `?latitude=${lat}&longitude=${lon}&daily=temperature_2m_min,temperature_2m_max&timezone=Australia/Sydney`);
  }
}
