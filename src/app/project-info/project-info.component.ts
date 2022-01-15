import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  info="This project was built using Angular and Angular Material powered by Firebase Firestore Database. The library allows the creation of books and keeps the data stored in the cloud. Full documentation on https://github.com/jmonterrosa15/library."

}
