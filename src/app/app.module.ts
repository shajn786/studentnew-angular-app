import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewAllStudentComponent } from './view-all-student/view-all-student.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoutes : Routes = [
  {
    path:"",component:AddStudentComponent
  },
  {
    path:"viewall",component:ViewAllStudentComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ViewAllStudentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
