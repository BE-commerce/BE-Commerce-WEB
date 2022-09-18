import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private apiServerUrl: string = environment.apiServerUrl;

  constructor(private _httpClient: HttpClient) { }


  get<T>(url: string): Observable<T> {

    const headers: HttpHeaders = new HttpHeaders()
      .set("Content-Type", "application/json")

    let u: string = this.apiServerUrl + url;
    return this._httpClient.get<any>(u, { headers: headers, observe: 'response' }).pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  post<T>(url: string, body: any): Observable<T> {

    let u: string = this.apiServerUrl + url;
    console.log(u)
    return this._httpClient.post<T>(u, body).pipe(
      map((res: any) => {
        console.log(res)
        return res;
      })
    );
  }

  delete<T>(url: string, options: any): Observable<T> {
    let u: string = this.apiServerUrl + url;
    return this._httpClient.delete<T>(u, options).pipe(
      map((res: any) => {
        return res;
      })
    );
  }


}
