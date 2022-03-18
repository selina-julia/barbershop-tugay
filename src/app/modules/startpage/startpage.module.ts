import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartpageComponent } from './startpage.component';
import { HeaderModule } from 'src/app/shared/modules/header/header.module';

@NgModule({
  imports: [
    CommonModule, 
    HeaderModule
  ],
  declarations: [StartpageComponent],

})
export class StartpageModule { }
