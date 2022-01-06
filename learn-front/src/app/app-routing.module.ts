import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from "./course/course.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {EditCourseComponent} from "./edit-course/edit-course.component";
import {CreateCourseComponent} from "./create-course/create-course.component";
import {StrongSearchComponent} from "./strong-search/strong-search.component";
import {AggregationComponent} from "./aggregation/aggregation.component";
import {ClientsComponent} from "./clients/clients.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-course', component: CreateCourseComponent},
  {path: 'strong-search', component: StrongSearchComponent},
  {path: 'course/:uid', component: CourseComponent},
  {path: 'edit/:uid', component: EditCourseComponent},
  {path: 'aggregation', component: AggregationComponent},
  {path: 'clients', component: ClientsComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
