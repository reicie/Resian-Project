import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  selectedValue: string[] = ["Give Once"];
  isGiveOnce: Boolean;
  toggleOptions: Array<String> = ["Give Once", "Monthly"];

  constructor() { }

  ngOnInit() {
  }
  // change the value of the selectedValue when button is toggled
  selectionChanged(item) {
    this.selectedValue = [item];
    if (item !== "Give Once") {
      this.isGiveOnce = false;
    } else {
      this.isGiveOnce = true;
    }
  }

}
