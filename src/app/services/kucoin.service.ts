import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KucoinService {
  private _api = process.env.NG_APP_KUCOIN_URL;
  constructor(private _http: HttpClient) { }

  getPrices(pair= 'BTC'): Observable<any> {
    const response =  this._http.get(`${this._api}/${pair}`).pipe(
      map((res: any) => res)
    );
    return response;
  }
}
