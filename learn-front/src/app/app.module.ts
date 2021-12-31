import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './header/header.component';
import {CourseComponent} from './course/course.component';
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditCourseComponent} from "./edit-course/edit-course.component";
import {CommonModule} from "@angular/common";
import {CreateCourseComponent} from './create-course/create-course.component';
import {StrongSearchComponent} from './strong-search/strong-search.component';
import {AggregationComponent} from './aggregation/aggregation.component';
import {ListCoursesComponent} from './aggregation/list-courses/list-courses.component';
import {PriceInfoComponent} from './aggregation/price-info/price-info.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { BuyCourseComponent } from './course/buy-course/buy-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseComponent,
    HomeComponent,
    EditCourseComponent,
    CreateCourseComponent,
    StrongSearchComponent,
    AggregationComponent,
    ListCoursesComponent,
    PriceInfoComponent,
    PageNotFoundComponent,
    BuyCourseComponent,
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
