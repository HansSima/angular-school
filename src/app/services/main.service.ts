import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bitcoin } from '../model/bitcoin.model';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  readonly apiUrl = 'https://api.coindesk.com/v1/bpi';

  constructor(private http: HttpClient) {}

  getBitcoin(): Observable<Bitcoin> {
    return this.http.get<Bitcoin>(this.apiUrl + '/currentprice.json');
  }
}
