import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class ServerErrorsInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // If the call fails, retry until 2 times before throwing an error
        return next.handle(request).pipe(catchError(err => {
            const error = { 'status': err.status , 'message' : err.error.message || err.statusText};
            return throwError(error);
        }));
    }
}