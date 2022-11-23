import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  set(key: string, value: any) {
    key = key + 'HRSys';
    return of(localStorage.setItem(key, value));
  }
  get(key: string) {
    key = key + 'HRSys';
    return localStorage.getItem(key);
  }
  removeStorgeByKey(key) {
    key = key + 'HRSys';
    return of(localStorage.removeItem(key));
  }
  clearStorage() {
    return of(localStorage.clear());
  }
  isExist(key: string): boolean {
    key = key + 'HRSys';
    return localStorage.getItem(key) !== null
  }


  setItem(key: string, value: string) {
    key = key + 'HRSys';
    return of(localStorage.setItem(key, value));
  }

  // getItem(key: string) {
  //   key = key + 'HRSys';
  //   return of(localStorage.getItem(key));
  // }
  // getUserData(key: string) {
  //   return localStorage.getItem(key);
  // }

  // getToken() {
  //   return localStorage.getItem('token');
  // }


}
