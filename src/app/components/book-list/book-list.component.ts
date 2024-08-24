import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookService } from '../../shared/services/book.service';
import { Book } from '../../models/book.model';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { BookFormComponent } from '../book-form/book-form.component';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger(100, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
        query(':leave', [
          stagger(100, [
            animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchQuery: string = '';
  private searchSubject = new Subject<string>();

  constructor(private bookService: BookService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.filteredBooks = this.books;

    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(query => {
      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  onSearchChange(query: string): void {
    this.searchSubject.next(query);
  }

  openBookDetails(book: Book): void {
    this.dialog.open(BookDetailsComponent, {
      data: { book }
    });
  }

  openBookForm(book?: Book): void {
    this.dialog.open(BookFormComponent, {
      data: { book }
    }).afterClosed().subscribe(result => {
      if (result) {
        if (book) {
          this.bookService.updateBook(result);
        } else {
          this.bookService.addBook(result);
        }
        this.filteredBooks = this.books = this.bookService.getBooks();
      }
    });
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id);
    this.filteredBooks = this.books = this.bookService.getBooks();
  }
}