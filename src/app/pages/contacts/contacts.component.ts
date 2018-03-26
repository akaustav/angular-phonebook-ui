import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../shared/services/page-title.service';
import { IContact, ContactsService } from '../../shared/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: IContact[];

  constructor(
    private pageTitle: PageTitleService,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.pageTitle.title = 'Contacts';
    this.contacts = this.contactsService.getContacts();
  }

  add() {
    this.contacts.push({ name: 'Test User', number: '888-888-8888', popular: false });
  }

}
