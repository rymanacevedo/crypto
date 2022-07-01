import { BaseExchangeService } from './base-exchange.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CoinbaseService extends BaseExchangeService {
  private _api = process.env.NG_APP_COINBASE_URL;
  getPrices(coin='BTC'): Observable<any> {
    return this.get(this._api, coin);
  }
}
