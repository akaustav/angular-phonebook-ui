import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../shared/services/page-title.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor(public pageTitle: PageTitleService) {}

  ngOnInit(): void {
    this.pageTitle.title = 'Popular';
  }

}
