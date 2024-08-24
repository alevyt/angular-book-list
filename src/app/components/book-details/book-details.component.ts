import { Component, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BookService } from '../../shared/services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class BookDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { book: Book },
    private dialogRef: MatDialogRef<BookDetailsComponent>,
    private bookService: BookService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  editBook(): void {
    // Close the details dialog and return the book data to be edited
    this.dialogRef.close(this.data.book);
  }

  deleteBook(): void {
    this.bookService.deleteBook(this.data.book.id);
    this.dialogRef.close();
  }
}