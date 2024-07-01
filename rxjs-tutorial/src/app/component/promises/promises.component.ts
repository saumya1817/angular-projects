import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  promiseVal: any;

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

  noLaptop = {
    brand: 'No Laptop Available',
    status: 'Failed'
  }

  constructor() { }

  DellAvailable(){
   return false;
  }

  HpAvailable(){
    return true;
   }

  ngOnInit(): void {

    let buyLaptop  = new Promise((resolve, reject)=>{
      if(this.DellAvailable()){
        setTimeout(()=>{
          resolve(this.dell);
        },3000);
      }else if(this.HpAvailable()){
        setTimeout(()=>{
          resolve(this.hp);
        },3000);
      }else{
        setTimeout(()=>{
          resolve(this.noLaptop);
        },3000);
      }
    });

    buyLaptop.then(res=>{
      console.log("Then Code=>", res);
      this.promiseVal = res;
    }).catch(err=>{
      console.log("catch code =>", err)
      this.promiseVal = err;
    })
  }

}
