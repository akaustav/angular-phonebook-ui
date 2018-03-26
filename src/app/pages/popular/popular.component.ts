import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../shared/services/page-title.service';
import { IContact, ContactsService } from '../../shared/services/contacts.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  contacts: IContact[];

  constructor(
    private pageTitle: PageTitleService,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.pageTitle.title = 'Popular';
    const fetchedContacts: IContact[] = this.contactsService.getContacts();

    this.contacts = fetchedContacts.filter((contact: IContact) => {
      return (contact.popular === true);
    });
  }

}
