import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material/material.module';


import { AppComponent } from './app.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PopularComponent } from './pages/popular/popular.component';

/** TODO:
  * 1. Break the router into it's own module
  **/

import { ContactsService } from './contacts.service';

const routes: Routes = [
  { path: '', component: PopularComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'popular', component: PopularComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
