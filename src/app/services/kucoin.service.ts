import { BaseExchangeService } from './base-exchange.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KucoinService extends BaseExchangeService {
  private _api = process.env.NG_APP_KUCOIN_URL;
  getPrices(coin='BTC'): Observable<any> {
    return this.get(this._api, coin);
  }
}
