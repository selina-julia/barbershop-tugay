import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartpageComponent } from './startpage.component';
import { HeaderModule } from 'src/app/shared/modules/header/header.module';
import { BarberModule } from 'src/app/shared/barber/barber.module';

@NgModule({

  
  imports: [
    CommonModule, 
    HeaderModule, 
    BarberModule
  ],
  declarations: [StartpageComponent],

})
export class StartpageModule { }
