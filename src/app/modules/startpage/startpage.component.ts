import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tgy-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit {

    public barbers = [{name: 'Tugay', link: ''}, {name: 'Berkan', link: ''}];

    /*
      1. /shared/module barber
      2. exportieren
      4. ngFor Barbers
      3. <tgy-barber [name]=barber.name> <-- name 
      4. in barber:componente => @input name:"", link:""
    */

  constructor() { }

  ngOnInit() {
  }

}
