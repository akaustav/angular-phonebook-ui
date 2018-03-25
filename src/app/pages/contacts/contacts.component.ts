import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../shared/services/page-title.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(public pageTitle: PageTitleService) {}

  ngOnInit(): void {
    this.pageTitle.title = 'Contacts';
  }

}
