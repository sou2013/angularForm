import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';        //import FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { FirstFormComponent } from './first-form/first-form.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RestHttpComponent } from './rest-http/rest-http.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstFormComponent,
    MainpageComponent,
    ReactiveFormComponent,
    RestHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
