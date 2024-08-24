import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BookFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { book?: Book }
  ) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: [this.data.book?.title || '', Validators.required],
      author: [this.data.book?.author || '', Validators.required],
      year: [this.data.book?.year || '', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      description: [this.data.book?.description || '', Validators.required]
    });
  }

  save(): void {
    if (this.bookForm.valid) {
      this.dialogRef.close(this.bookForm.value);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}