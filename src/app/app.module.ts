import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components.module';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material.module';
import { ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { DatabaseService } from './database.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarComponent } from './navbar/navbar.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ProjectInfoComponent } from './project-info/project-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    FormComponent,
    NavbarComponent,
    ProjectInfoComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatBottomSheetModule,
    RouterModule.forRoot([
      { path: '**', component: HomeComponent }
    ])
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
