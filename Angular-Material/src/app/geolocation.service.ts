import { Injectable } from '@angular/core';
import { PlaceLocation } from './logic/PlaceLocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  //Use W3C geolocation API
  requestGeoLocation(callback: Function){
    navigator.geolocation.getCurrentPosition(
      position=>{
        callback(position.coords)
      },
      error=>{

        //todo - handle scenario when location is not provided
        callback(null);
      }
    )
  }

  getapLink(location: PlaceLocation){
    let query="";
    if(location.latitude && location.longitude){
      query = `${location.latitude},${location.longitude}`;
    }
    else{
      query = `${location.address},${location.city}`;
    }
    //Check user device type
    if(/iPad|iPhone|iPod/.test(navigator.userAgent)){
      return `https://maps.apple.com/?q=${query}`
    }else{
      return `https://maps.google.com/?q=${query}`
    }
  }

  constructor() { }
}
