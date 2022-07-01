import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseExchangeService } from './base-exchange.service';

@Injectable({
  providedIn: 'root'
})
export class UpholdService extends BaseExchangeService {
  private _api = process.env.NG_APP_UPHOLD_URL;

  getPrices(coin='BTC'): Observable<any> {
    return this.get(this._api, coin);
  }
}
