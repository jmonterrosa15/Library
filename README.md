# Library

## Firebase URL

https://library-94d3a.web.app

## Description

This project is a personal project that implements Angular CLI, Angular Material Components and Firebase Firestore Database.

Main functionalities:
- Create books with the add button
- Each book can contain a title, author, number of pages, and whether it has been read or not.
- The books are displayed in form of cards, where they can be removed or its read state changed
- The changes done in the cards are reflected in the Firestore Database
- There is also a navigation bar with a button that displays information of the project

## Technologies used

Angular CLI (https://github.com/angular/angular-cli) version 13.1.2.
Angular Material Components (https://material.angular.io/) version 13.1.2.
Angular Firestore Database (https://firebase.google.com/docs/firestore) as of Jan 2022

## Architecture and Components

### App Root Component

The application runs on the App component, that contains a RouterModule that renders the Home Component.
In the App component, the required modules for Angular Material are imported.

### Book Interface: Book.ts

This interface exports the schema for the books, as will be sent to the database

### Database Service

This service connects to the database and exports the CRUD functions required for the app.
This service also imports the Book interface, and exports the Update interface.

### Home Component
This component renders the main screen of the application.
It contains the navigation bar, the container of the books, and the Add button.
It also handles the logic of creating and updating books, and rendering the Form Component in a Material Dialog
This component imports the Book interface, Update interface, and is injected the Database Service

### Book Component

This component renders each book in form of card.
Each book contains a title, author, number of pages and a read state.
It also contains a remove button that removes the book from the database.
This component is reusable, and it has the following input and output properties:

@Input('book') book!:any;
Inputs the book data as defined in the Book interface


@Output('isReadChange') isReadChange = new EventEmitter();
Emits the event when there is a change in the read state using the checkbox

 @Output('delete') delete = new EventEmitter();
 Emits the delete event, when the book is removed

 ### Form Component

 Renders the form to add a new book.
 It contains the fields for title, author, number of pages and read state.
 It also has validation since the tile, author and number of pages field are required.
 When the ADD button is clicked, it saves the book to database, and displays a snackbar with a confirmation.

 ### Navbar Component

 Contains the navigation bar, and an info button that displays a bottom sheet with information of the project.

 ### Project-info
 Contains the data of the project. It's displayed in the bottom sheet when the info button is clicked.
 
