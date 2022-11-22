import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizationService } from 'src/app/services/localization/localization.service';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/AlertService';
import { Shell } from '../shell';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})

export class NotfoundComponent implements OnInit {
  get localize(): LocalizationService { return Shell.Injector.get(LocalizationService); }
  get Alert(): AlertService { return Shell.Injector.get(AlertService); }
  get Storage(): StorageService { return Shell.Injector.get(StorageService); }
  constructor(
    public route: Router,
    private authenticationService: AuthService,
    public localizationService: LocalizationService,
    
    private titleService: Title) {
  }

  ngOnInit() {
    let screenName = this.localizationService.lang == 'ar' ? '404 صفحة' : '404Page';
    this.titleService.setTitle(screenName);
  }

  GoToUrl() {
    this.route.navigate(['main']);
  }

  

}
