import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';


// Services
import { ContactsService } from './contacts.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PopularComponent } from './pages/popular/popular.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactsComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
