import { BaseExchangeService } from './base-exchange.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinbaseService extends BaseExchangeService {
  private _api = process.env.NG_APP_COINBASE_URL;
  getPrices() {
    return this.get(this._api);
  }
}
