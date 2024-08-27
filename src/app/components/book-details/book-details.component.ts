import { Component, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { BookFormComponent } from '../book-form/book-form.component';
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
    private bookService: BookService,
    private dialog: MatDialog
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  editBook(book?: Book): void {

    this.dialog.open(BookFormComponent,{
      data: { book }
    }).afterClosed().subscribe(result => {
      if (result) {
        if (book) {
          this.bookService.editBook(result);
        } else {
          this.bookService.addBook(result);
        }
        // this.filteredBooks = this.books = this.bookService.getBooks();
      }
    })

    // Close the details dialog and return the book data to be edited
    this.dialogRef.close(this.data.book);
  }
}