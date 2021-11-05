import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpholdService {
  private _api = process.env.NG_APP_UPHOLD_WALLET;
  constructor(private _http: HttpClient) {}
  getToken(id: number): Observable<any> {
    const url = `${this._api}/${id}`;
    return this.getResponse(url);
  }

  getResponse(url: string = this._api): Observable<any> {
    const response = this._http.get(url).pipe(
      map((res: any) => res)
    );
    return response;
  }
}
