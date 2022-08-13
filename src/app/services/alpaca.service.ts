import { BaseExchangeService } from './base-exchange.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAsset } from '../models/IAsset';

@Injectable({
  providedIn: 'root'
})
export class AlpacaService extends BaseExchangeService {

  private _api = process.env.NG_APP_ALPACA_URL;

  getPrices(coin='BTC', currency='USDT'): Observable<IAsset> {
    return this.get(this._api, coin, currency);
  }
}
