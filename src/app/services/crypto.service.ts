import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseExchangeService } from './base-exchange.service';
import { IAsset } from '../models/IAsset';

@Injectable({
  providedIn: 'root'
})
export class CryptoService extends BaseExchangeService {
  private _api = process.env.NG_APP_CRYPTO_URL;
  getPrices(coin='BTC'): Observable<IAsset> {
    return this.get(this._api, coin);
  }
}
