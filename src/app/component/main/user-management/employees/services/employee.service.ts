import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Shell } from 'src/app/component/shell';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpService: HttpService){
  }


  getCountries(): Observable<any> {
    return this.httpService.get('Countries/GetDropdownList');
  }
  getGenders(): Observable<any> {
    return this.httpService.get('Genders/GetDropdownList');
  }

  
  getLookups(): Observable<any> {
    const sources = [];   
    sources.push(this.getCountries());
    sources.push(this.getGenders());
    return forkJoin(sources);
  }
}
