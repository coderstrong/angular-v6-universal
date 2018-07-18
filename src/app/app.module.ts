import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { AppComponent } from './app.component';
import { isPlatformBrowser } from '@angular/common';
import { AppRoutingModule } from '../config/app-routing.module';
import { ErrorsModule } from './core/errors/errors.module';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'angular-universal' }),
        AppRoutingModule,
        ErrorsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(APP_ID) private appId: string
    ) {
        const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
        console.log(`Running ${platform} with appId=${appId}`);
    }
}
