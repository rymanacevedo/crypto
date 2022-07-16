import { BaseExchangeService } from './base-exchange.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAsset } from '../models/IAsset';

@Injectable({
  providedIn: 'root'
})
export class KrakenService extends BaseExchangeService {
  private _api = process.env.NG_APP_KRAKEN_URL;
  getPrices(coin='BTC', currency='USD'): Observable<IAsset> {
    return this.get(this._api, coin, currency);
  }
}
