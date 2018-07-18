import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

    constructor(
        // Because the ErrorHandler is created before the providers, we'll have to use the Injector to get them.
        private injector: Injector,
    ) { }

    handleError(error: Error | HttpErrorResponse) {

        const router = this.injector.get(Router);
        if (error instanceof HttpErrorResponse) {
            // Server or connection error happened
            if (!navigator.onLine) {
                // Handle offline error
                console.log('No Internet Connection');
            } else {
                // Handle Http Error (error.status === 403, 404..)
                console.log(`${error.status} - ${error.message}`);
                
            }
        } else {
            // Handle Client Error (Angular Error, ReferenceError...)
            router.navigate(['/error'], {queryParams: {error: error} });
        }

        // Log the error anyway
        console.error('It happens: ', error);
    }
}