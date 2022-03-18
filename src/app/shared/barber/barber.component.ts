import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tgy-barber',
  templateUrl: './barber.component.html',
  styleUrls: ['./barber.component.scss']
})
export class BarberComponent implements OnInit {
  @Input() name ="";
  @Input() imgUrl="";

  constructor() {
    //console.log(name); 
  }
  

  ngOnInit() {
  }

}
