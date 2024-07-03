import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(val, container) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(container).appendChild(el);
  }
}
