import { Component } from '@angular/core';
import { MyCountry } from './my-country'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularForm';

  /*
  countryList:country[]=[
    new country("1", "USA"),
    new country("2", "India"),
    new country("3", "England")
  ]
  */
  countryList:MyCountry[]=[
    new MyCountry('1', 'USA'),
    new MyCountry('2', 'Taiwan'),
    new MyCountry('3', 'England')
  ]
  onSubmit(contactForm) {
    console.log(contactForm.value);
  }
}

export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }

}

 