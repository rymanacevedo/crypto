import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseExchangeService } from './base-exchange.service';
import { IAsset } from '../models/IAsset';

@Injectable({
  providedIn: 'root'
})
export class CoinmetroService extends BaseExchangeService {
  private _api = process.env.NG_APP_COINMETRO_URL;
  getPrices(coin='BTC'): Observable<IAsset> {
    return this.get(this._api, coin);
  }
}
