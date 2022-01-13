import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book, Update } from '../Book';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    console.log(this.book);
  }

  @Input('book') book!:any;
  @Output('isReadChange') isReadChange = new EventEmitter();
  @Output('delete') delete = new EventEmitter();

  onIsReadChange(bookId:string, isReadNewValue:boolean) {
    const update:Update={id:bookId,updates:{ isRead: isReadNewValue}};
    this.isReadChange.emit(update);
  }

  onModify() {
    console.log('Modify book!');
  }

  onRemove(bookId:string) {
    this.delete.emit(bookId);
  }

}