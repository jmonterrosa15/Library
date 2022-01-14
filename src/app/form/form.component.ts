import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Book } from '../Book';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = new FormControl('', [Validators.required]);
  author = new FormControl('', [Validators.required]);
  numberOfPages = new FormControl('', [Validators.required]);
  isRead = new FormControl();

  form = new FormGroup({
    title:this.title,
    author:this.author,
    numberOfPages:this.numberOfPages,
    isRead:this.isRead
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private fb:FormBuilder) { 

  }

  ngOnInit(): void {
  }

  

  onAdd(form:any){
    const book:Book = {
      title: form.bookname,
      author: form.author,
      numberOfPages: form.numberOfPages,
      isRead: form.isRead
    }
    console.log(form);
  }

}
