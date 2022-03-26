import { Input, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StartpageComponent } from "./startpage.component";
import { HeaderModule } from "src/app/shared/modules/header/header.module";
import { BarberModule } from "src/app/shared/modules/barber/barber.module";
import { ServiceModule } from "src/app/shared/modules/service/service.module";

@NgModule({
    imports: [CommonModule, HeaderModule, BarberModule, ServiceModule],
    declarations: [StartpageComponent]
})
export class StartpageModule {}
