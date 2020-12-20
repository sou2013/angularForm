import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rest-http',
  templateUrl: './rest-http.component.html',
  styleUrls: ['./rest-http.component.css']
})

export class RestHttpComponent implements OnInit {

  // https://www.tutorialsteacher.com/typescript/typescript-any
  smartphone: any = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    let something: any = "Hello World!"; 
 
  }

  getSmartphones() {
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

}
