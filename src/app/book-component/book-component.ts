import { Component, OnInit } from '@angular/core';
import { Book } from '../books';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../book-service';

@Component({
  selector: 'app-book-component',
  standalone: false,
  templateUrl: './book-component.html',
  styleUrl: './book-component.css'
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  formGroupBook: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: BookService) {
    this.formGroupBook = this.formBuilder.group({
      id: [''],
      title: [''],
      author: [''],
      genre: [''],
      year: [''],
      price: ['']
    });
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  // Carregar todos os livros
  loadBooks() {
    this.service.getAllProducts().subscribe({
      next: json => this.books = json
    });
  }

  // Salvar livro chamando o service (POST)
  save() {
    const book: Book = this.formGroupBook.value;

    this.service.save(book).subscribe({
      next: json => {
        this.books.push(json);     // adiciona o que veio da API
        this.formGroupBook.reset(); // limpa o form
      }
    });
  }
}
