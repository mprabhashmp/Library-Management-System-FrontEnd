import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LmsUsersService {

  private apiUrl = 'http://localhost:8080/api/getusers'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  // Get all users
  getAllUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Delete user by ID
  deleteUser(userId: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${userId}`;
    return this.http.delete(deleteUrl);
  }
}
