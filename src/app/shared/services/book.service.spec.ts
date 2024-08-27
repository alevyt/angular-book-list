import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';
import { Book } from '../../models/book.model';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of books', () => {
    const books = service.getBooks();
    expect(Array.isArray(books)).toBe(true);
    expect(books.length).toBeGreaterThan(0);
  });

  it('should add a new book to the list', () => {
    const newBook: Book = {
      id: '11',
      title: 'Test Book',
      author: 'Test Author',
      year: 2024,
      description: 'This is a test description.',
      coverImageURL: 'https://example.com/test-cover.jpg',
    };

    service.addBook(newBook);
    const books = service.getBooks();
    expect(books).toContain(newBook);
  });

  it('should update an existing book', () => {
    const updatedBook: Book = {
      id: '1',
      title: 'Updated Title',
      author: 'Updated Author',
      year: 2024,
      description: 'This is an updated description.',
      coverImageURL: 'https://example.com/updated-cover.jpg',
    };

    service.editBook(updatedBook);
    const book = service.getBookById('1');
    expect(book?.title).toBe('Updated Title');
    expect(book?.author).toBe('Updated Author');
    expect(book?.coverImageURL).toBe('https://example.com/updated-cover.jpg');
  });
  
  it('should remove a book from the list', () => {
    const bookId = '1';
    service.deleteBook(bookId);
    const book = service.getBookById(bookId);
    expect(book).toBeUndefined();
  });
});
