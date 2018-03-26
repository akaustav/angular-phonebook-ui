import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/components/material/material.module';
import { AppRoutingModule } from './app-routing.module';


// Services
import { PageTitleService } from './shared/services/page-title.service';
import { ContactsService } from './shared/services/contacts.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AddContactComponent } from './shared/components/add-contact/add-contact.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PopularComponent } from './pages/popular/popular.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddContactComponent,
    ContactsComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    PageTitleService,
    ContactsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddContactComponent]
})
export class AppModule {}
