import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertService } from '../services/AlertService';
//import { ConfigService } from 'ngx-envconfig';
import { LoadingService } from '../services/loading/loading.service';
import { StorageService } from '../services/storage/storage.service';


@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {

  private token: string | null = null;
  private basicToken: string | null = null;
  public serverUrl ="";


  constructor(private loadingService: LoadingService, 
    private storage: StorageService, 
    private alertService: AlertService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.basicToken = this.storage.get('basic-token');
    this.serverUrl = "http://localhost:44364/";

    request = request.clone({
      setHeaders: {
        'Content-Type':  'application/json',
        'Authorization': `Basic ${this.basicToken ? btoa(this.basicToken) : ''}`
      }
    });

    


    if (request.url.includes(this.serverUrl)) {
      this.loadingService.setLoading(true, request.url);

      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          // alertHandling
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.alertService.showError('!Session Ended!');
              localStorage.clear();
              this.router.navigateByUrl('/login');
            }
            //  else if (error.status === 400 || error.status === 502 || error.status === 503) {
            //   this.alertService.error('!Technical Error!');
            // }
             else if (error.status === 405) {
              this.alertService.showError('!NOT ALLOWED ERROR!');
            } else if (error.status === 500) {
              this.alertService.showError('!SYSTEM ERROR!');
            }
          }

          return throwError(error);
        }),
        finalize(() => this.loadingService.setLoading(false, request.url))
      );
    } else {
      return next.handle(request);
    }
  }
}
