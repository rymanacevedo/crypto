import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinbaseService {
  private _api = process.env.NG_APP_COINBASE_URL;
  constructor(private _http: HttpClient) { }

  getPrices(pair= 'BTC-USD'): Observable<any> {
    const response =  this._http.get(`${this._api}/prices/${pair}/buy`).pipe(
      map((res: any) => res)
    );
    return response;
  }
}
