import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit {

  result1: any = "Default Data 1";
  result2: any = "Default Data 2";
  result3: any = "Default Data 3";

  dell = {
    brand: 'Dell',
    hardDisk: '1 TB',
    color: 'Black'
  }
  hp = {
    brand: 'HP',
    hardDisk: '2 TB',
    color: 'Silver'
  }

  constructor() { }

  ngOnInit(): void {
  }

  withPromise(): void{
    this.result1 = "Fetching Data...";

    let laptop = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.dell);
      },3000);
    });

    laptop.then(res=>{
      this.result1 = JSON.stringify(res);
    })
  }

  async withAsyncAwait(){
    this.result2 = "Fetching Data...";

    let laptop = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.hp);
      },3000);
    });

    let data = await laptop;
    this.result2 = JSON.stringify(data);
  }

  withFetch(){
    this.result3 = "Fetching Data...";

    fetch('https://jsonplaceholder.typicode.com/posts')
                  .then(response => response.json()) .then(json => this.result3 = JSON.stringify(json));
  }
}
