import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'http://localhost:8080/api/getbooks'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Method to fetch book data from the backend API
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}
