import { Component, OnInit } from "@angular/core";
import { PATIENTS } from "../mock-patients";

@Component({
  selector: "app-monitpatients",
  templateUrl: "./monitpatients.component.html",
  styleUrls: ["./monitpatients.component.scss"]
})
export class MonitpatientsComponent implements OnInit {
  patients = PATIENTS;
  constructor() {}

  ngOnInit() {}
}
