import { Component , OnInit} from '@angular/core';
import { Book } from '../books';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { auto } from '@popperjs/core';
import { BookService } from '../book-service';

@Component({
  selector: 'app-book-component',
  standalone: false,
  templateUrl: './book-component.html',
  styleUrl: './book-component.css'
})
export class BookComponent implements OnInit {

  ngOnInit(): void {
    this.service.getAllProducts().subscribe({
      next: json => this.books = json
  });
  }

  books: Book[] = [];
  FormgroupBook: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: BookService) {

    this.FormgroupBook = this.formBuilder.group({
      id: [''],
      title: [''],
      author: [''],
      genre: [''],
      year: [''],
      price: ['']
    });
  }

  save() {
    const book: Book = this.FormgroupBook.value;
    this.books.push(book);
    this.FormgroupBook.reset();
  }

}