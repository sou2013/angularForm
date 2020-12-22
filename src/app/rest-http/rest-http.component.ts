import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Smartphone } from '../model/smartphone';
//import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rest-http',
  templateUrl: './rest-http.component.html',
  styleUrls: ['./rest-http.component.css']
})

export class RestHttpComponent implements OnInit {

  // https://www.tutorialsteacher.com/typescript/typescript-any
  //smartphone: any = [];
  smartphone: Smartphone[] = [];
  constructor(private api: ApiService) {}
  //headers: new Map();
  headers: any;
  ngOnInit(): void {
    let something: any = "Hello World!"; 
    //this.myService.sayHello();
    
  }
  getSmartphones() {
    this.api.getSmartphone()
    .subscribe(resp => {
      console.log(resp);
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
  
      for (const data of resp.body) {
        this.smartphone.push(data);
      }
      console.log(this.smartphone);
    });

    this.testLambda(100);
  }

  testLambda(z:number) {
        // lambda, fat-arrow function
    var foo = (x:number)=>10 + x 
    console.log(foo(z))      //outputs 110 
  }
  

  /*
  getSmartphones() {
    //this.myService.sayHello();
    this.api.getSmartphone()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.smartphone.push({
            name: d.name,
            price: d.price
          });
        }
        console.log(this.smartphone);
      });
  }
  */

}
