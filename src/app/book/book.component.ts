import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  @Output() change = new EventEmitter();

  onIsReadChange() {
    console.log('Is read has been changed');
  }

  onModify() {
    console.log('Modify book!');
  }

  onRemove() {
    console.log('Remove book!');
  }

  book = { title: 'Goodbye, things!', author: 'Fumio Sasaki', numberOfPages: 3, isRead: false };

}
