import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Book, Update } from '../Book';
import { DatabaseService } from '../database.service';
import { FormComponent } from '../form/form.component';
import {MaterialComponentsModule} from './../material-components.module';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private db:DatabaseService, private dialog:MatDialog) { }
  ngOnInit(): void {
  }

  book:Book = { title: 'Another book', author: 'J. R. R. Tolkien', numberOfPages: 865, isRead: false };

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

  //This is how you get data from the form
  //In the actual form, I can create a template variable for the form, and pass the data with the event
  //Like from the button
  //In that case, I'll have to use property binding

  displayForm(){
    this.dialog.open(FormComponent, {data:this.book});
  }

}
