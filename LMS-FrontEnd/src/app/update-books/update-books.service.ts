import { Injectable } from '@angular/core';
import { Book } from '../book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateBooksService {

  private apiUrl = 'http://localhost:8080/api/updatebook'; // API URL

  constructor(private http: HttpClient) { }

  // Get details of a specific book by ID
  getBookById(bookId: number): Observable<Book> {
    const url = `${this.apiUrl}/${bookId}`;
    return this.http.get<Book>(url);
  }

  // Update a specific book by ID
  updateBookById(bookId: number, updatedBook: Book): Observable<any> {
    const url = `${this.apiUrl}/${bookId}`;
    return this.http.put(url, updatedBook);
  }
}
