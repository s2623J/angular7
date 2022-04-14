import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'pb-edit-contact',
  templateUrl: './pb-edit-contact.component.html',
  styleUrls: ['./pb-edit-contact.component.css']
})
export class PbEditContactComponent implements OnInit {

  contact: Contact = new Contact; // To prevent empty data set error occuring before server response
  contactForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: PhonebookService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsData => {
      this.service.getContactDetails(paramsData['id'])
        // The spreader notation will cover ALL of the "key: value" pairs
        .subscribe((data) => { this.contactForm.setValue({ ...data }) }) 
    })

    this.contactForm = new FormGroup({
      id:        new FormControl(),
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname:  new FormControl(),
      gender:    new FormControl(),
      email:     new FormControl('', [Validators.required, Validators.email]),
      phone:     new FormControl('', [Validators.required, Validators.pattern(/\d{10,12}/)]),
      dob:       new FormControl(), 
      picture:   new FormControl('/assets/images/profile.png'),
      city:      new FormControl(),
      state:     new FormControl(),
      country:   new FormControl()
    })
  }

  saveChanges() {
    // debugger; // Un-Rem this out to toggle the browser debugger. Pauses debugger at THIS location

    this.service.updateContact(this.contactForm.value)
      .subscribe(data => {
        this.router.navigate(['/contact-details', this.contactForm.value.id]);
      })
  }

}
