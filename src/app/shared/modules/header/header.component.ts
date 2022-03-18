import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tgy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuItems = ["home","barber","preise","buchen"];
  constructor() { }

  ngOnInit() {
  }

}
