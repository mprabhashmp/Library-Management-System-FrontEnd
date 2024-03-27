import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LmsHomeService {

  private apiUrl1 = 'http://localhost:8080/api/auth/authenticate';
  private apiUrl2 = 'http://localhost:8080/api/auth/CurrentUser';
  private apiUrl3 = 'http://localhost:8080/api/auth/userprofile';
  // private apiUrl4 = 'http://localhost:8080/api/auth/UpdateProfile';
  // private apiUrl5 = 'http://localhost:8080/api/user/booking/getComplainsByCurrentUser';
  // private apiUrl6 = 'http://localhost:8080/api/user/complain/getResolvedComplainsByUser';
  // private apiUrl7 = 'http://localhost:8080/api/user/complain/getWardenComplainsByCurrentUser';
  // private apiUrl8 = 'http://localhost:8080/api/user/complain/getDeanComplainsByCurrentUser';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {    //Class that can be use to get stored JWT 
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return headers;
  }

  login(username: string, password: string): Observable<{ token: string }> {
    const body = {
      username: username,
      password: password
    };
    return this.http.post<{ token: string }>(`${this.apiUrl1}`, body);
  }
  

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  getUsername(): Observable<string> { //Getting the Current Logged User
    const headers = this.getHeaders();
    return this.http.get<string>(`${this.apiUrl2}`,{ headers }); //Using stored token 
  }

  getUserProfile(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl3}`, { headers });
  }


  getUserRole(): Observable<string> {
    const token = localStorage.getItem('token') || ''; // Providing a default value of an empty string if token is null
    const decodedToken: any = jwt_decode(token);
    const role = decodedToken.role[0];
    return of(role);
  }
  


//GET ALL Books
  // getComplains(): Observable<any> {
  //   const headers = this.getHeaders();
  //   return this.http.get<any>(`${this.apiUrl5}`, { headers });
  // }

  //Get All Resolved Complains By User Index
  // getResolveComplains(): Observable<any> {
  //   const headers = this.getHeaders();
  //   return this.http.get<any>(`${this.apiUrl6}`, { headers });
  // }

  // //Get complins from warden
  // getWardenComplains(): Observable<any> {
  //   const headers = this.getHeaders();
  //   return this.http.get<any>(`${this.apiUrl7}`, { headers });
  // }

  //   //Get complins from warden
  //   getDeanComplains(): Observable<any> {
  //     const headers = this.getHeaders();
  //     return this.http.get<any>(`${this.apiUrl8}`, { headers });
  //   }
}
