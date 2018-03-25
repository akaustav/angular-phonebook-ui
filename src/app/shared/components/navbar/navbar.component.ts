import { Component } from '@angular/core';
import { APP_TITLE } from '../../services/page-title.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public title = APP_TITLE;
}
