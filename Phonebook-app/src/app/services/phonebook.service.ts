import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import { map } from 'rxjs/operators'; // First install "npm install rxjs-compat"

const baseUrl = 'http://localhost:4300/contacts/';

@Injectable({  // Singleton that can be injected by any parent
  providedIn: 'root'
})

export class PhonebookService {

  constructor(private http:HttpClient) { } // Add service to constructor to make it an injectable singleton

  getContactDetails(id: number): Observable <Contact> { // Must be changed to an "Observable" because it is async
  // getContactDetails(id: number): Contact {
    // let contact = new Contact();
    // contact.id = 1;
    // contact.firstname = 'Dave';
    // contact.lastname = 'Michael';
    // contact.email = 'x@x.com';
    // contact.phone = '123.123.1234';
    // contact.gender = 'Male';
    // contact.city = 'Portland (of course)';
    // contact.state = 'OR';
    // contact.country = 'US';
    // contact.dob = '1974-01-20';
    // contact.picture = 'https://content.fortune.com/wp-content/uploads/2022/04/GettyImages-1302236226.jpg?resize=130,86';
    // return contact;

    return this.http.get(baseUrl + id).pipe(map(data => data as Contact)); // Output must be cast as "Contact"
  }

  addNewContact(contact: Contact): Observable <Contact> {
    return this.http.post(baseUrl, contact).pipe(map(data => data as Contact)); // Output must be cast as "Contact"
  }

  updateContact(contact: Contact): Observable <Contact> {
    return this.http.put(baseUrl + contact.id, contact).pipe(map(data => data as Contact)); // Output must be cast as "Contact"
  }

  deleteContact(id: number): Observable <any> {
    return this.http.delete(baseUrl + id).pipe(map(data => data as Contact)); // Output must be cast as "Contact"
  }

  getAllContacts(pageNumber: number = 1): Observable <Contact[]> {
    let params = { '_page': + ' ' + pageNumber }; // Will create a page subset of data when used as a param
    return this.http.get(baseUrl, {params}).pipe(map(data => data as Contact[])); // Output must be cast as "Contact" 
  }
}
