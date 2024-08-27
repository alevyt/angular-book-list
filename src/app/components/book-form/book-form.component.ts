import { Component, Inject, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Book } from '../../models/book.model';
import { urlValidator } from '../../shared/validators/URLValidator';

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
    ReactiveFormsModule,
  ],
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
      id: new FormControl<number>(this.data.book?.id || 1),
      title: new FormControl<string>(this.data.book?.title || '', {
        nonNullable: true,
        validators: Validators.required,
      }),
      author: new FormControl<string>(this.data.book?.author || '', {
        nonNullable: true,
        validators: Validators.required,
      }),
      year: new FormControl<number>(this.data.book?.year || 0, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(0)],
      }),
      description: new FormControl<string>(this.data.book?.description || '', {
        nonNullable: true,
        validators: Validators.required,
      }),
      coverImageURL: new FormControl<string>(
        this.data.book?.coverImageURL || '',
        {
          // nonNullable: true,
          // validators: [urlValidator()]
        }
      ),
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
