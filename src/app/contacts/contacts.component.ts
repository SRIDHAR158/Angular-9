import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(public contactsService: ContactsService) { } //When you want to call service method directly from template then mark the instance of the class in the constructor as public or you will get error as below!

   //contactList = []; //use this array while getting a hardcoded data from a method in the service class!
    contactList: any;
    msgTrue = false;
    
    ngOnInit(): void {
      //This below code is for getting a hardcoded method in the service class!
    //this.contactList = this.contactsService.getContacts();

    //This below code is for getting a httpclient calls api method in the service class!
     this.contactsService.getContacts().subscribe(data => {
       console.log(data);
     this.contactList = data;

    });

    
    // this.contactsService.doGetWithParams(
    //   success => {
    //     //debugger
    //     if (success) {
    //       this.contactList = success;
    //     } else {
    //       this.contactList = [];
    //     }
    //   },
    //   error => {
        
    //   }
    // );

  }

  addNewContact(form){
    
    //mock the form data that we will get from the form.

    //const newFormData = { id: 6, firstName: 'Raj', lastName: 'Kumar'};

    // Dynamic Data from Form

    console.log(form.value.id);
    console.log(form.value.firstName);
    console.log(form.value.lastName);

    const newFormData = { id: form.value.id, firstName: form.value.firstName, lastName: form.value.lastName};

    this.contactsService.createContact(newFormData).subscribe(data => {
      console.log(data);
      this.msgTrue = true; 

    });

  }

  updateContact(contactId){
    //mock the form data that we will get from the form.
    const newFormData = { id: contactId, firstName: 'Steve', lastName: 'Johnson'};

    this.contactsService.updateContact(contactId, newFormData).subscribe(data => {
      this.msgTrue = true;
    });

  }

  // this contactId will be dynamic and will usually come from the UI click

  // We will implement in CRUD series starting next.

  deleteContact(contactId){
     this.contactsService.deleteContact(contactId).subscribe(data => {
        this.msgTrue = true;
     });
  }

  //  The below lines of code is for http param example.

  getContact(){
    this.contactsService.getContactById().subscribe(data => {
      console.log(data);
    })
  }

}
