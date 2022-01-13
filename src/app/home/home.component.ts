import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, Update } from '../Book';
import { DatabaseService } from '../database.service';
import {MaterialComponentsModule} from './../material-components.module';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private db:DatabaseService) { }
  ngOnInit(): void {
  }

  book:Book = { title: 'The Hobbit', author: 'J. R. R. Tolkien', numberOfPages: 865, isRead: false };

  onAddBook(){
    this.db.addBook(this.book);
  }

  books$:Observable<any[]> = this.db.getBooks();

  updateIsReadStatus(update:Update){
    this.db.updateBook(update);
  }

  deleteBook(id:string){
    this.db.deleteBook(id);
  }

}
