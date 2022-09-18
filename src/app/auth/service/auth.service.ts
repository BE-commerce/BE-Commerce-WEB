import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/@global/services/api.service';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  public userSubject: BehaviorSubject<User>;

  constructor(private httpClient: HttpClient) {
    super(httpClient)
    this.userSubject = new BehaviorSubject<User>({});
  }

  logIn(email: string, password: string) {
    const url: string = `${environment.apiUrl}auth/login`;
    const body: any = { email: email, password: password };
    return this.post<any>(url, body)
      .pipe(map(res => {
        const user: User = {
          uid: res.userId,
          email: res.email,
          displayName: res.displayName,
          access_token: res.access_token,
          refresh_token: res.refresh_token
        };
        this.userSubject.next(user);
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }));
  }

  refreshToken() {
    const url: string = `${environment.apiUrl}auth/token`;
    const body: any = {
      token: this.userValue.refresh_token
    };
    return this.post<any>(url, body)
      .pipe(map((token) => {
        const user: User = {
          uid: this.userValue.uid,
          displayName: this.userValue.displayName,
          email: this.userValue.email,
          access_token: token.access_token,
          refresh_token: this.userValue.refresh_token
        }
        this.userSubject.next(user);
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }));
  }

  logout() {
    const url: string = `${environment.apiUrl}auth/token/${this.userValue.refresh_token}`;
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }
    this.delete<any>(url, options).subscribe();
    localStorage.removeItem('user');
    this.userSubject.next({});
  }

  public get userValue(): User {
    return this.userSubject.value;
  }


  login(login: Login): Observable<any> {
    return this.post("login/create", login)
  }

  signIn(): Observable<any> {
    return this.get("login/test")
  }


}
