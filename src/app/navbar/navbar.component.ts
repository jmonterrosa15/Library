import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ProjectInfoComponent } from '../project-info/project-info.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) { }
  ngOnInit(): void {
  }

  openInfo(){
    this._bottomSheet.open(ProjectInfoComponent);
  }

}
