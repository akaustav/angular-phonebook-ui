import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

export const APP_TITLE = 'Phonebook';

@Injectable()
export class PageTitleService {
  private _title = '';

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;

    if (title !== '') {
      title = `${title} | `;
    }

    this.bodyTitle.setTitle(`${title}${APP_TITLE}`);
  }

  constructor(private bodyTitle: Title) {}
}
