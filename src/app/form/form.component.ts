import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  bookname = new FormControl('', [Validators.required]);
  author = new FormControl('', [Validators.required]);

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { 
    
   }
  
  ngOnInit(): void {
  }

  onAdd(name:string, author:string){
    console.log(name, author);
  }

}
