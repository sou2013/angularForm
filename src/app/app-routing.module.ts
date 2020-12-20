import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstFormComponent } from './first-form/first-form.component'
import { RestHttpComponent } from './rest-http/rest-http.component'
const routes: Routes = [
  { path: 'first', component: FirstFormComponent },
  { path: 'resthttp', component: RestHttpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
