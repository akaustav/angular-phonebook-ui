import { Injectable } from '@angular/core';

export interface IContact {
  name: string;
  number: string;
  popular: boolean;
}

@Injectable()
export class ContactsService {

  getContacts(): IContact[] {
    const contacts: IContact[] = [
      { name: 'Ameet', number: '999-999-9999', popular: true },
      { name: 'John', number: '777-777-7777', popular: false },
      { name: 'Mary', number: '111-111-1111', popular: true },
      { name: 'Janez', number: '444-444-4444', popular: false }
    ];

    return contacts;
  }

}
