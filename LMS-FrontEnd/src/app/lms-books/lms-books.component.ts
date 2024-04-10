import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from '../book';

@Component({
  selector: 'app-lms-books',
  templateUrl: './lms-books.component.html',
  styleUrls: ['./lms-books.component.css']
})
export class LmsBooksComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  // Method to fetch books from the backend API
  fetchBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
      });
  }
}
