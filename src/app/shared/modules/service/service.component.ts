import { Component, Input, OnInit } from "@angular/core";
import { TgyService } from "../../models/service.definition";

@Component({
    selector: "tgy-service",
    templateUrl: "./service.component.html",
    styleUrls: ["./service.component.scss"]
})
export class ServiceComponent implements OnInit {
    @Input() serviceItem?: TgyService;
    constructor() {}

    ngOnInit() {}
}
