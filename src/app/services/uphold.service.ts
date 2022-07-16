import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseExchangeService } from './base-exchange.service';
import { IAsset } from '../models/IAsset';
@Injectable({
  providedIn: 'root'
})
export class UpholdService extends BaseExchangeService {
  private _api = process.env.NG_APP_UPHOLD_URL;

  getPrices(coin='BTC', currency='USD'): Observable<IAsset> {
    return this.get(this._api, coin, currency);
  }
}
