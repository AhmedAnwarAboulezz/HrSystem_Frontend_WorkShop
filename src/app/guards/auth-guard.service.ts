
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { LocalizationService } from '../services/localization/localization.service';
import { Shell } from '../component/shell';
import { AlertService } from '../services/AlertService';
import { StorageService } from '../services/storage/storage.service';
import { Observable } from 'rxjs';

@Injectable()export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private localStorage: StorageService,
    private alertService: AlertService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (state.url.includes('login')) {
        return true;
    }
    else  {
      try{
        let basicAuth = this.localStorage.get('basic-token');
        let expDate = this.localStorage.get('expireDate');
        if(basicAuth == undefined 
          || basicAuth == null 
          || basicAuth == ""
          || basicAuth !== 'admin:Admin@123'
          || expDate == undefined  
          || expDate == null 
          || new Date(expDate) <= new Date()
        )
        {
          this.alertService.showError('sorry you need to login again');
          this.router.navigate(['/login']);
          return false;
        }
        else{
          return true;
  
        }
      }
      catch{
        debugger;
        this.alertService.showError('sorry you need to login again');
        this.router.navigate(['/404']);
        return false;
      }
    }
  }
}

