import { Component } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { UpdateBooksService } from './update-books.service';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent {


  book: Book = {
    bookId: '',
    title: '',
    author: '',
    isbn: '',
    genre: '',
    imageUrl: ''
  };

  constructor(
    private route: ActivatedRoute,
    private bookService: UpdateBooksService
  ) { }

  ngOnInit(): void {

    this.getBookDetails();
  }

  getBookDetails(): void {
    this.bookService.getBookById(this.book.bookId).subscribe(
      (data: Book) => {
        this.book = data;
      },
      (error: any) => {
        console.error('Error fetching book details:', error);
        // Handle error as needed
      }
    );
  }

  updateBook(): void {
    this.bookService.updateBookById(this.book.bookId, this.book).subscribe(
      () => {
        alert('Book updated successfully');
      },
      (error: any) => {
        console.error('Error updating book:', error);
        // Handle error as needed
      }
    );
  }
}
