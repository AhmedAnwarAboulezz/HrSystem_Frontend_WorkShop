import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './component/login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';
import { TokenInterceptor } from './interceptors/tokenInterceptor';
import { AuthGuard } from './guards/auth-guard.service';
import { CoreModule } from 'src/app/core/core.module';

import { RecaptchaModule } from 'ng-recaptcha';
import { TreeModule } from 'angular-tree-component';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

import { ConfigModule } from 'ngx-envconfig';
import { environment } from 'src/environments/environment';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/TokenService';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    HttpClientModule,
    HttpModule,
    RecaptchaModule,
    CoreModule,
    TreeModule.forRoot(),
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    
    MatPasswordStrengthModule,
    ConfigModule.forRoot(environment)
  ],
  exports: [TranslateModule],
  providers: [DataService, AuthGuard,TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
      //deps: [Router, AuthService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
