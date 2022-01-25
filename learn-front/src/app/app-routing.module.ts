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
import {ClientComponent} from "./clients/client/client.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {LoginUserComponent} from "./login-user/login-user.component";
import {CheckTokenGuard} from "./check-token.guard";

const routes: Routes = [
  {
    path: 'login-user',
    component: LoginUserComponent,
    canActivate: [CheckTokenGuard]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [CheckTokenGuard]
  },
  {
    path: 'create-course',
    component: CreateCourseComponent,
    canActivate: [CheckTokenGuard]
  },
  {
    path: 'strong-search',
    component: StrongSearchComponent,
    canActivate: [CheckTokenGuard]
  },
  {
    path: 'course/:uid',
    component: CourseComponent,
    canActivate: [CheckTokenGuard]
  },
  {
    path: 'edit/:uid',
    component: EditCourseComponent,
    canActivate: [CheckTokenGuard]
  },
  {
    path: 'aggregation',
    component: AggregationComponent,
    canActivate: [CheckTokenGuard]
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [CheckTokenGuard]
  },
  {
    path: 'create-user',
    component: CreateUserComponent,
    canActivate: [CheckTokenGuard]
  },

  {
    path: 'clients/:uid',
    component: ClientComponent,
    canActivate: [CheckTokenGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [CheckTokenGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
