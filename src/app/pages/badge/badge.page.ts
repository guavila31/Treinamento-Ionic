import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage implements OnInit {

  notifications = 10

  constructor() { }

  ngOnInit() {
  }

}
