import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsertBooksService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api/addbook';

  addBook(addBookinfo : any){
    // Send the registration request to the server
    const url = `${this.apiUrl}`
    return this.http.post(url , addBookinfo);
  }
}
