import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './app-counter.component.html',
  styleUrls: ['./app-counter.component.css']
})
export class AppCounterComponent implements OnInit {

  count!: number; // Model data

  constructor() { }

  ngOnInit(): void {
    this.count = 0; // Must use "this" in order to refer to the variable on line #10
  }

  increment() {
    this.count++; // Changes Model data
  }
  decrement() {
    this.count--; // Changes Model data
  }
}
