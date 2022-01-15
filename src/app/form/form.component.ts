import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import { DatabaseService } from '../database.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

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

  constructor(private db:DatabaseService, public dialog:MatDialogRef<FormComponent>, private _snackBar: MatSnackBar) { 
  }

  ngOnInit(): void {
  }

  onAdd(form:any){
    this.db.addBook(form);
    this.dialog.close();
    this._snackBar.open('Book added to database!', 'OK');
  }
}

