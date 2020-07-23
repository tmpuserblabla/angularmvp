import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      // tslint:disable-next-line: object-literal-key-quotes
      'Accept': 'application/json'
    };

    const request = req.clone({ url: `https://jsonplaceholder.typicode.com${req.url}`, setHeaders: headersConfig });
    return next.handle(request);
  }
}
