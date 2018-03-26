import { Injectable } from '@angular/core';

export interface IContact {
  name: string;
  number: string;
  popular: boolean;
}

@Injectable()
export class ContactsService {

  private readonly contacts: IContact[] = [
    { name: 'Ameet', number: '999-999-9999', popular: true },
    { name: 'John', number: '777-777-7777', popular: false },
    { name: 'Sanghamitra', number: '111-111-1111', popular: true },
    { name: 'Janez', number: '444-444-4444', popular: false }
  ];

  getContacts(): IContact[] {
    return this.contacts;
  }

  getPopularContacts(): IContact[] {
    return this.contacts.filter((contact: IContact) => {
      return (contact.popular === true);
    });
  }

}
