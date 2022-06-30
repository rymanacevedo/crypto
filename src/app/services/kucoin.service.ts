import { BaseExchangeService } from './base-exchange.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KucoinService extends BaseExchangeService {
  private _api = process.env.NG_APP_KUCOIN_URL;
  getPrices(): Observable<any> {
    return this.get(this._api);
  }
}
