import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Coffee } from '../logic/Coffee';
import { GeolocationService } from '../geolocation.service';
import { TastingRating } from '../logic/TastingRating';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent {

  coffee = new Coffee();
  types = ["Espresso", "Cappuchino", "Latte", "Black Coffee"];
  tastingEnabled = false;

  constructor(private geoLocation: GeolocationService){

  }

  tastingRatingChanged(checked: boolean){
    if(checked){
      this.coffee.tastingRating = new TastingRating();
    }else{
      this.coffee.tastingRating = null;
    }
  }

  cancel(){}

  save(){}

  acquireLocation(){
    this.geoLocation.requestGeoLocation((location: GeolocationCoordinates|null)=>{
      if(location){
        this.coffee.location!.latitude = location.latitude;
        this.coffee.location!.longitude = location.longitude;
      }

    });
  }
}
