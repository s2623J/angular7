import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'pb-add-contact',
  templateUrl: './pb-add-contact.component.html',
  styleUrls: ['./pb-add-contact.component.css']
})
export class PbAddContactComponent implements OnInit {

  contact: Contact = new Contact; // To prevent empty data set error occuring before server response

  constructor(private service: PhonebookService, private router: Router) { }

  ngOnInit(): void {
    this.contact = new Contact;
  }

  AddContact(): void {
    this.contact.picture = './assets/images/' + this.contact.picture;
    this.service.addNewContact(this.contact)
      .subscribe((contact) => { 
        console.log('Added new Contact:', contact);
        this.router.navigate(['/contact-details', contact.id]);
      })
  }
}
