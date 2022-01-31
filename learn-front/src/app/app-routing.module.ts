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
import {AuthGuard} from "./auth.guard";
import {UnAuthGuard} from "./un-auth.guard";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {
    path: 'login-user',
    component: LoginUserComponent,
    canActivate: [UnAuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-course',
    component: CreateCourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'strong-search',
    component: StrongSearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'course/:uid',
    component: CourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:uid',
    component: EditCourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'aggregation',
    component: AggregationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-user',
    component: CreateUserComponent,
    canActivate: [UnAuthGuard]
  },

  {
    path: 'clients/:uid',
    component: ClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
