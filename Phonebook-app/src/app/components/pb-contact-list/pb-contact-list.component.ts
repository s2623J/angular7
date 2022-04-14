import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { PhonebookService } from 'src/app/services/phonebook.service';

declare var $: any;

@Component({
  selector: 'pb-contact-list',
  templateUrl: './pb-contact-list.component.html',
  styleUrls: ['./pb-contact-list.component.css']
})
export class PbContactListComponent implements OnInit {

  contacts: Contact[] = [];
  pageNum: number = 1;

  constructor(private service: PhonebookService) {}

  ngOnInit(): void {
    this.service.getAllContacts().subscribe(data => this.contacts = data); // Services must be "subscribed" to

    $(window).scroll(() => {
      let w = $(window);
      let d = $(document);

      if(w.height() + w.scrollTop() === d.height()) {
        this.loadMore();
      }
    });
  }

  loadMore(): void  {
    this.pageNum++;
    // Use the spread operator(...) to concat two arrays
    this.service.getAllContacts(this.pageNum).subscribe(data => this.contacts = [...this.contacts, ...data]);
  }
}
