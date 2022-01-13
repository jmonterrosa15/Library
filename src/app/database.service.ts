import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Book, Update } from './Book';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private db:AngularFirestore) { }

  addBook(book:Book){
    this.db.collection('books').doc().set(book).then(()=>{
      console.log('Book added successfully to database!')
    });
  }

  getBooks(){
    return this.db.collection('books').valueChanges({ idField:'key$'});
  }

  updateBook(update:Update){
    this.db.collection('books').doc(update.id).update(update.updates).then(()=>{
      console.log('Book updated in database');
    });
  }

  deleteBook(id:string){
    this.db.collection('books').doc(id).delete();
  }
}
