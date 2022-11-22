import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { BaseComponent } from '../BaseComponent';
import { LocalizationService } from 'src/app/services/localization/localization.service';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AlertService } from 'src/app/services/AlertService';
import { Shell } from '../shell';
import { DataService } from 'src/app/services/data.service';
import * as moment from 'moment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  form: FormGroup;
  invalidLogin: boolean;
  Organizations_Data: any = false;
  logoFl: any = './assets/images/biglogo.png';
  logoSl: any = './assets/images/biglogo.png';
  hide = true;
  showChangeOrganization = true;
  get Alert(): AlertService { return Shell.Injector.get(AlertService); }
  get Storage(): StorageService { return Shell.Injector.get(StorageService); }
  get DataService(): DataService { return Shell.Injector.get(DataService); }

  
  constructor(
    private authenticationService: AuthService,
    fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public localizationService: LocalizationService,
    public http: HttpClient,
    public httpService: HttpService,
    private sanitizer: DomSanitizer,
    private titleService: Title
  ) {
    super();
    this.form = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {

    let screenName = this.localizationService.lang == 'ar' ? 'الدخول' : 'Login';
    this.titleService.setTitle(screenName);

  }


  authorize() {
    
    if(this.form.value.userName == "admin" && this.form.value.password == "Admin@123"){
      this.Storage.set('basic-token','admin:Admin@123');
      let expDate = moment(new Date()).add(1,"days").toDate();
      this.Storage.setItem('expireDate', expDate.toDateString());
      this.router.navigate(['/main/']);
    }
    else{      
      this.alertService.showError("Invalid UserName Or Password!");
    }   
  }

  changeLanguage(culture: string) {
    this.localizationService.changeLang(culture);
    let screenName = culture == 'ar' ? 'الدخول' : 'Login';
    this.titleService.setTitle(screenName);
  }




}
