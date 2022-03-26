import { Component, OnInit } from "@angular/core";
import {
    serviceData,
    serviceStructure,
    TgyService,
    TgyServiceCategory,
    TgyServiceStructure
} from "src/app/shared/models/service.definition";

@Component({
    selector: "tgy-startpage",
    templateUrl: "./startpage.component.html",
    styleUrls: ["./startpage.component.scss"]
})
export class StartpageComponent implements OnInit {
    public barbers = [
        { name: "Tugay", imgUrl: "../assets/images/tugay.png", link: "" },
        { name: "Berkan", imgUrl: "../assets/images/berkan.png", link: "" }
    ];
    public services: TgyService[] = serviceData;
    public serviceCategories = serviceStructure;
    constructor() {}

    ngOnInit() {}
}
