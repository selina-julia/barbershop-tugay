import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StartpageComponent } from "./modules/startpage/startpage.component";

const routes: Routes = [
    { path: "", redirectTo: "/", pathMatch: "full" },
    { path: "", component: StartpageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
