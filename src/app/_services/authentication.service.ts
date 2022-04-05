import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from "../models/user";
import {environment} from "../../environments/environment";
import{Informationsgenerales} from "../models/Informationsgenerales";

const API_PATH = environment.apiUrl;

/**
 * Http headers
 */
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  })
};


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private tokenSubject: BehaviorSubject<any>;
  public tokenInfos: Observable<any>;

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.tokenSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('token')!));
    this.tokenInfos = this.tokenSubject.asObservable();

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentTokenValue(): any {
    return this.tokenSubject.value;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {

    const body = `email=${email}&password=${password}`;

    return this.http.post<any>(API_PATH + '/login', body, HTTP_OPTIONS)
      .pipe(map(token => {
        // login successful if there's a jwt token in the response
        if (token && token.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', JSON.stringify(token));
          this.tokenSubject.next(token);
          return this.getUserInfo(token.access_token);
        }
        return null;
      }));
  }

  logout() {
    // remove token from local storage to log user out
    localStorage.removeItem('token');
    this.tokenSubject.next(null);

    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null!);
  }

  register(user: Informationsgenerales) : Observable<string>{
    return this.http.post<string>(API_PATH + '/users', user);
  }

  private getUserInfo(accessToken: string) : Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          authorization: 'Bearer ' + accessToken
        })
    };
    return this.http.get<User>(API_PATH + "/users/me", httpOptions)
      .pipe(map(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }
}
