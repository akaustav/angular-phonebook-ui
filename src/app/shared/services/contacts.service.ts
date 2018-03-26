import { Injectable } from '@angular/core';

interface IContact {
  name: string;
  number: string;
}

@Injectable()
export class ContactsService {

  getContacts(): IContact[] {
    const contacts: IContact[] = [
      { name: 'Ameet', number: '999-999-9999' },
      { name: 'John', number: '777-777-7777' },
      { name: 'Mary', number: '111-111-1111' },
      { name: 'Janez', number: '444-444-4444' }
    ];

    return contacts;
  }

}
