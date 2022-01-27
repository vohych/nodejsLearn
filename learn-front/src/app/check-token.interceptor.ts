import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Router} from "@angular/router";
import {RoutingEnum} from "./routing.enum";

@Injectable()
export class CheckTokenInterceptor implements HttpInterceptor {

  public url: string;

  constructor(
    private router: Router,
  ) {
    this.url = this.router.url;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.endsWith(RoutingEnum.LOGIN_USER)) {
      return next.handle(request).pipe(
        map((e: HttpEvent<any>) => {
          if (e instanceof HttpResponse) {
            if (e.status === 200 && e.body.user.token) this.router.navigate([RoutingEnum.HOME]).then();
          }
          return e;
        })
      );
    }

    if (request.url.endsWith(RoutingEnum.CREATE_USER)) {
      return next.handle(request).pipe(
        map((e: HttpEvent<any>) => {
          if (e instanceof HttpResponse) {
            if (e.status === 200) this.router.navigate([RoutingEnum.LOGIN_USER]).then();
          }
          return e;
        })
      );
    }

    return next.handle(request);
  }

}
