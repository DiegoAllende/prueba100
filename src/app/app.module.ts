import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../environments/environment';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings, RECAPTCHA_LANGUAGE } from 'ng-recaptcha';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import { JwtDecoderService } from '@shared/services/jwt-decoder.service';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { CoreModule } from '@core/core.module';
import { TokenAuthInterceptor } from '@core/interceptors/token-auth.interceptor';
import { LoaderInterceptor } from '@core/interceptors/loader.interceptor';
import { AppConfigProvider } from './app-config.provider';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    CoreModule,
  ],
  providers: [
    AppConfigProvider,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: "es-419", // use spanish-lat language
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenAuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    JwtDecoderService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


