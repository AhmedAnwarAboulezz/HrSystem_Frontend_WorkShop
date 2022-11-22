import { Injectable, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from '@angular/material';
import { StorageService } from '../storage/storage.service';
import { Shell } from 'src/app/component/shell';

@Injectable({
  providedIn: 'root'
})

export class LocalizationService {

  public lang: any;
  public currentLang: any;
  public translate: TranslateService;
  public multiLang: boolean = false;
  flLang;
  slLang;
  changeLanguageEvent$: EventEmitter<string> = new EventEmitter<string>();

  //get Storage(): StorageService { return Shell.Injector.get(StorageService); }

  constructor(private translateService: TranslateService, private adapter: DateAdapter<any>,public Storage: StorageService) {
    this.translate = translateService;
    this.lang = this.Storage.get('language') != null ? this.Storage.get('language') : 'en';
  }

  async setDefaultLanguage() {
    this.translate.addLangs(['en', 'fr', 'ar']);
    this.translate.setDefaultLang('en');
    const browserLang = this.lang ? this.lang : this.translate.getBrowserLang();
    await this.translate.use(browserLang.match(/en|fr|ar/) ? browserLang : 'en');
    this.changeHtmlDirection(browserLang);
  }

  changeLang(lang) {
    this.lang = lang;
    this.translate.use(lang);
    this.Storage.set('language', lang);
    this.changeHtmlDirection(lang);

  }



  changeHtmlDirection(lang) {
    if (lang !== 'ar') {
    } else if (lang === 'ar') {

    }
  }

  isEnglish(): boolean {
    const currentLang = this.translate.currentLang;
    if (currentLang === 'en') {
      return true;
    } else {
      return false;
    }
  }

 

}
