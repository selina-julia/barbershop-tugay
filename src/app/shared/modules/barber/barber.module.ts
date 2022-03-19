import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarberComponent } from './barber.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BarberComponent],
  exports: [BarberComponent]
})
export class BarberModule { }
