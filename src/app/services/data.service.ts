import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = environment.baseUrl;
  public _asesores: BehaviorSubject<any>;

  constructor(private httpClient: HttpClient) {
    this._asesores = <BehaviorSubject<any>>new BehaviorSubject('');

  }
  public getValue() {
    return this._asesores.asObservable();

  }
  
}
