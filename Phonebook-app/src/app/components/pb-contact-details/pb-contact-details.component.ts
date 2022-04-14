import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { PhonebookService } from 'src/app/services/phonebook.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'pb-contact-details',
  templateUrl: './pb-contact-details.component.html',
  styleUrls: ['./pb-contact-details.component.css']
})

export class PbContactDetailsComponent implements OnInit {

  contact: Contact = new Contact; // To prevent empty data set error occuring before server response  

  constructor(private service: PhonebookService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { } // Declared as singletons - Services have to be injected

  ngOnInit(): void {
    // let service = new PhonebookService();
    // this.contact = this.service.getContactDetails(4);
    this.activatedRoute.params.subscribe(paramsData => {
      this.service.getContactDetails(paramsData['id'])
      .subscribe((data) => { this.contact = data; })
    })
  }

  deleteContact(id: number): void {

    Swal.fire({
      title: 'Are you sure that you want to delete this contact?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.service.deleteContact(this.contact.id)
        .subscribe((data) => { 
          this.router.navigate(['/contact-list']);
        })
        // Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Contact is still in our database.', 'error');
      }
    });
  }
}

