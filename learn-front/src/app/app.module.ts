import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './header/header.component';
import {CourseComponent} from './course/course.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditCourseComponent} from "./edit-course/edit-course.component";
import {CommonModule} from "@angular/common";
import { CreateCourseComponent } from './create-course/create-course.component';
import { StrongSearchComponent } from './strong-search/strong-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseComponent,
    HomeComponent,
    EditCourseComponent,
    CreateCourseComponent,
    StrongSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
