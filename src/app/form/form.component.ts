import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Book } from '../Book';
import { DatabaseService } from '../database.service';

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
  @Output('discard') discard = new EventEmitter();

  form = new FormGroup({
    title:this.title,
    author:this.author,
    numberOfPages:this.numberOfPages,
    isRead:this.isRead
  });

  constructor(private db:DatabaseService, public dialog:MatDialogRef<FormComponent>) { 
  }

  ngOnInit(): void {
  }

  onAdd(form:any){
    this.db.addBook(form);
    this.dialog.close()
  }
}

