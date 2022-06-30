import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseExchangeService {

  constructor(private _http: HttpClient) { }

  get(url: string, p: string = 'BTC'): Observable<any> {
    const response = this._http.get(`${url}/${p}`).pipe(
      map((res: any) => res),
      catchError(this.handleErrors)
    );
    return response;
  }

  private handleErrors(error: Response | any): Observable<any> {
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    throw new Error(errMsg);
}
}
