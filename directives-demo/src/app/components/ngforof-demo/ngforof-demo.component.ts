import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforof-demo',
  templateUrl: './ngforof-demo.component.html',
  styleUrls: ['./ngforof-demo.component.css']
})
export class NgforofDemoComponent implements OnInit {

  people!: Array<any>;
  imgStyles = {
    'height.px':    100,
    'border-radius.px':  5,
    'margin.px':  5
  };
  btnStyles = {
    'margin.px':  10
  }

  getCssClass = (age: number) => {
    return age >= 18 ? 'text-success' : 'text-danger';
  }
  deletePerson = (i: number) => {
    this.people.splice(i, 1);
  }

  constructor() { }

  ngOnInit(): void {
    this.people = [
      {
        name: 'Vinod',
        age:  40,
        city: 'Bangalore',
        picture:  'assets/images/vinod.jpg'
      },{
        name: 'Shyam',
        age:  40,
        city: 'Bangalore',
        picture:  'assets/images/shyam.png'
      },      {
        name: 'John Doe',
        age:  16,
        city: 'Dallas',
        picture:  'assets/images/johndoe.png'
      },      {
        name: 'Jane Doe',
        age:  40,
        city: 'Chicago',
        picture:  'assets/images/janedoe.png'
      }
    ]
  }

}
