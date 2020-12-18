import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
// import { Component } from '@angular/core';
import { MyCountry } from './my-country'
import {contact} from './contact'
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularForm';
  contact:contact;
  //@ViewChild(NgForm) contactForm: NgForm;
  // 'contactForm'  reference #contactForm in html
  @ViewChild('contactForm', {static: false}) contactForm: NgForm;

  
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
    console.log(this.contact.firstname);
  }

  ngOnInit() {
 
    this.contact = {
      firstname: "Sachinwww",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050" }
    };
 
  }

  setDefaults() {
    this.contactForm.setValue(this.contact);
  }
 
  changeCountry() {
    this.contactForm.controls["country"].setValue("1");
  }
 
  patchValue() {
    let obj = {
      firstname: "Rahul",
      lastname: "Dravid",
      email: "rahul@gmail.com",
    };
 
    this.contactForm.control.patchValue(obj);
 
  }
 
  changeAddress() {
    let obj = {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600100"
    };
    let address= this.contactForm.controls["address"] as FormGroup
    address.patchValue(obj);
 
  }
 
  reset() {
    this.contactForm.reset();
  }
 
  resetForm() {
    this.contactForm.resetForm();
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

 