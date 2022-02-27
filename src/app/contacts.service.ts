import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  //private _url: string = "http://localhost:3000/contacts"

  constructor(private httpClient: HttpClient) { }

  getContacts(){
    // HTTP calls here
    // The below example is for understanding service in angular which is hardcoded array and we are returning it!
    // const contactList = [
    //   {contactId: 1, contactName: 'Sridhar'},
    //   {contactId: 2, contactName: 'Tutorials'},
    //   {contactId: 3, contactName: 'Youtube'},
    //   {contactId: 4, contactName: 'Angular'},
    // ] 
  
    // return contactList;
    
    //The below example is for a method using http client calls!

    let httpHeaders = new HttpHeaders(
      {
             'content-type': 'application/json',
             'Authorization': 'ARCtutorials4s4S4S4$$@$',
             'timeOutSeconds': '3000'
      });
    
      // Headers are immutable,

      // Custom Headers
      httpHeaders = httpHeaders.set('arc-tutorials-id', '118');

      let time = httpHeaders.get('timeOutSeconds');
      
      //for logging.interceptors.ts file code to work change the value here down below to like time === '5000'!
      
      if(time === '20000'){
       //at the API - we can check if Authorization is empty - redirect user to login screen
       // some custom logic

        httpHeaders = httpHeaders.set('Authorization', '');

      }

     return this.httpClient.get('http://localhost:3000/contacts', {headers: httpHeaders});
     //return this.httpClient.get('http://localhost:8080/table/tablereport');
  }

  // doGetWithParams(successCallBack, errorCallBack) {
  //   this.http.get(this._url).subscribe(response => {
  //     successCallBack(response);
  //   }, error => {
  //     errorCallBack(error);          
  //   });
  // }

 // HTTP calls here
    // The below example is for understanding service in angular which is hardcoded array and we are returning it!
    // const contactList = [
    //   {contactId: 1, contactName: 'Sridhar'},
    //   {contactId: 2, contactName: 'Tutorials'},
    //   {contactId: 3, contactName: 'Youtube'},
    //   {contactId: 4, contactName: 'Angular'},
    // ] 
  
    // return contactList;
    
    //The below example is for a method using http client calls!

    createContact(createBody){
     const httpHeaders = new HttpHeaders();
     httpHeaders.append('content-type', 'application/json');
     return this.httpClient.post('http://localhost:3000/contacts', createBody, { headers: httpHeaders});
    }

    updateContact(contactId, updatedBody){
      const endpointURL = 'http://localhost:3000/contacts/'+ contactId;
      return this.httpClient.put(endpointURL, updatedBody);
    }

    deleteContact(contactId){
      const deleteEndpoint = 'http://localhost:3000/contacts/' + contactId;
      return this.httpClient.delete(deleteEndpoint);
    }

    // get contact by id - param example

    getContactById(){

      const httpParams = new HttpParams({
        fromObject: {
          id: ['2', '3'],
          lastName: 'mark',
        }
      });

      //the url in the browser will become http://localhost:3000/contacts?query=mark

      return this.httpClient.get('http://localhost:3000/contacts', {params: httpParams});
    }

  callingFromTemplate(){
    console.log('Calling From Template Directly');
  }
}
