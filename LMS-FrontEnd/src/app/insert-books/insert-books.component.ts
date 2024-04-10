import { Component } from '@angular/core';
import { InsertBooksService } from './insert-books.service';

@Component({
  selector: 'app-insert-books',
  templateUrl: './insert-books.component.html',
  styleUrls: ['./insert-books.component.css']
})
export class InsertBooksComponent {

  addBookinfo = {
    title: '',
    author: '',
    isbn:'',
    genre: ''
  };
  
  constructor(private InsertBookservice: InsertBooksService) { }
  
  addBook(): void {
    // Validate form data
    if (this.validateForm()) {
      // Call the registration service to add the book
      this.InsertBookservice.addBook(this.addBookinfo)
        .subscribe(response => {
          // Handle the response from the server
          console.log(response);
          alert('Book added successfully');
          this.clearForm();
        },
        error => {
          // Handle the error response from the server
          console.error(error);
          alert('Failed to add book');
        }
      );
    }
  }
  
  validateForm(): boolean {
    // Perform form validation here
    // For simplicity, assume all fields are required and not empty
    if (!this.addBookinfo.title || !this.addBookinfo.author || !this.addBookinfo.isbn || !this.addBookinfo.genre) {
      alert('Please fill in all fields');
      return false;
    }
    return true;
  }
  
  clearForm(): void {
    // Reset form data after successful submission
    this.addBookinfo = {
      title: '',
      author: '',
      isbn: '',
      genre: ''
    };
  }
  
}
