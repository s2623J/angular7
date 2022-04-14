import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-demo',
  templateUrl: './ngswitch-demo.component.html',
  styleUrls: ['./ngswitch-demo.component.css']
})
export class NgswitchDemoComponent implements OnInit {

  choice = 1;

  constructor() { }

  ngOnInit(): void {
    if (!!localStorage['userChoice']) {
      this.choice = localStorage['userChoice'];
    }
  }
  
  setChoice(choice: number) {
    this.choice = choice;
    localStorage['userChoice'] = choice; // To remember choice between browser refreshes
  }

}
