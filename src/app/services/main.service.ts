import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  readonly apiUrl = 'https://api.coindesk.com/v1/bpi';

  constructor(private http: HttpClient) {}

  getAny(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/currentprice.json');
  }
}
