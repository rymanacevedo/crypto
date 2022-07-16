import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BaseExchangeService } from './base-exchange.service';
import { IAsset } from '../models/IAsset';

@Injectable({
  providedIn: 'root'
})
export class BinanceService extends BaseExchangeService{
  private _api = process.env.NG_APP_BINANCE_URL;
  getPrices(coin='BTC', currency='USDT'): Observable<IAsset> {
    if(currency === 'USD') {
      currency =  'USDT';
    }
    return this.get(this._api, coin, currency);
  }
}
