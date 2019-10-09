import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /**
   * Call the api to get the user by its login
   *
   * @param login User login (estimating that it is unique)
   * @return Observable<any>
   */
  public byLogin(login: string): Observable<any> {
    return this.http.get(
      environment.apiRoot + 'login/' + login,
      {
        observe: 'response'
      }
    );
  }
}
