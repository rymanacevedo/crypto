import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BaseExchangeService } from './base-exchange.service';

@Injectable({
  providedIn: 'root'
})
export class BinanceService extends BaseExchangeService{
  private _api = process.env.NG_APP_BINANCE_URL;
  getPrices(coin='BTC'): Observable<any> {
    return this.get(this._api, coin);
  }
}
