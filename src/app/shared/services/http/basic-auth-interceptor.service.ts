import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user: any = window.btoa('abcd:xdcfvgh');
    request = request.clone({
      setHeaders: {
          Authorization: `Basic ${user}`
      }
    });
    return next.handle(request);
  }
}
