import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Book} from './Book';

export interface Update{
  id:string;
  updates?:any;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private db:AngularFirestore) { }

  addBook(book:Book){
    this.db.collection('books').doc().set(book);
  }

  getBooks(){
    return this.db.collection('books').valueChanges({ idField:'key$'});
  }

  updateBook(update:Update){
    this.db.collection('books').doc(update.id).update(update.updates);
  }

  deleteBook(id:string){
    this.db.collection('books').doc(id).delete();
  }
}

