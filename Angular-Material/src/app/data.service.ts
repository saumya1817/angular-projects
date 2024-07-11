import { Injectable } from '@angular/core';
import { Coffee } from './logic/Coffee';
import { PlaceLocation } from './logic/PlaceLocation';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(callback: Function){
    const list = [
      new Coffee("1","Double Espresso","The Fusion Kitchen",new PlaceLocation("Borivali West", "Mumbai")),
      new Coffee("2","Latte","Bhagvati",new PlaceLocation("Malad East", "Mumbai"))
    ];
    callback(list);
  }

}
