import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup; // Step 3 :- Give same FormGroup name as in the template.
  constructor(private formBuilder: FormBuilder) {
    // this.checkoutForm = formBuilder.group({ //Building the form using FormBuilder
    // emailAddress: new FormControl(), //In the formBuilder - we are creating a group of form elements
    // quantity: new FormControl(), // these should be exactly same as your form
    // terms: new FormControl() // we can also have it dynamic - we will learn in next coming tutorials
    // });

    this.checkoutForm = formBuilder.group({ //Building the form using FormBuilder
    emailAddress: ['', [Validators.minLength(5),
                        Validators.maxLength(20),
                        Validators.required, 
                        Validators.email]], //In the formBuilder - we are creating a group of form elements
    quantity: ['', Validators.required], // these should be exactly same as your form
    terms: ['', Validators.requiredTrue], // we can also have it dynamic - we will learn in next coming tutorials
    // items : formBuilder.array([
    //   new FormControl('Angular'),
    //   new FormControl('React')
    // ])


    items: this.formBuilder.array([
      this.formBuilder.group({
        itemId: ['1'],
        itemName: ['Arc'],
        itemDesc: ['Tutorials'],
        itemDone: ['', Validators.requiredTrue],
      }),
      // this.formBuilder.group({
      //   taskId: ['1'],
      //   taskName: ['Arc'],
      //   itemDesc: ['Tutorials'],
      //   itemDone: ['', Validators.requiredTrue],
      // })    
    ])
   });
  
  
}

  valueChangedTracked = '';
  //valueChangedTracked1 = [];

  ngOnInit(): void {

   //getting length
   // getting individual array element
   // set array values for elements
   // reset array

   // whatever you can do with an Array - you can do it with FormArray :)

    this.checkoutForm.get('items').setValue([{
        itemId: ['1'],
        itemName: ['Learning'],
        itemDesc: ['Angular 9'],
        itemDone: ['', Validators.requiredTrue],
    }]);

     //Form array into console, 
     console.log(this.checkoutForm.get('items').value.length);
     console.log(this.checkoutForm.get('items').value);
     const itemVal = this.checkoutForm.get('items').value;
     console.log(itemVal[0].itemDesc);

    this.checkoutForm.get('items').reset();

    //Learning to use statusChanges on FormControl

    //this is for individual field
    // this.checkoutForm.get('emailAddress').statusChanges.subscribe(data =>{
    //     console.log(data);
    // });

    // dynamically we can capture the state of validation of the "Entire" form
    // this for entire form
    this.checkoutForm.statusChanges.subscribe(data =>{
      console.log(data);
  });

   // Provide the formControlName for which we want to read the values on change
   // The formControlName can be any input type on your form
    
    // this.checkoutForm.get('emailAddress').valueChanges.subscribe(data => {
    //   console.log(data);
    //   this.valueChangedTracked = data;
    //});

       // the difference is - whenever there is any change in any form control
       // form will emit the event
       this.checkoutForm.valueChanges.subscribe(data => {
            console.log(data);
            //this.valueChangedTracked1[data] = data;
       });

    // this.checkoutForm.setValue({ //Using the setValue method - we are setting entire Form Value
    //   emailAddress: 'sridhar@gmail.com',
    //   quantity: 10,
    //   terms: true,
    // }); // We cannot omit or leave any field

    this.checkoutForm.patchValue({ //Using the setValue method - we are setting entire Form Value
      emailAddress: 'sridhar@gmail.com',
      quantity: 10,
      //terms: true,
    });// We can omit or leave any field using patch value method
  }

   postData(){
     console.log(this.checkoutForm);
     console.log("Entire Form Value " + this.checkoutForm.value);
     console.log(this.checkoutForm.value);
     console.log("Email Address " + this.checkoutForm.value.emailAddress);

     this.resetForm();

   }

   resetForm(){
     this.checkoutForm.reset(); //We will use reset method to reset the entire form in one shot!
   }

   get items(){
     return this.checkoutForm.get('items') as FormArray;
   }

   //whenever user clicks on add new item - a new element should be inserted into the formArray
   // our FormArray that we are working is 'items'.
   //Since FormArray is a Array - we can apply all array methods that we know of in any language/ JS
   addNewItem(){
    const itemLength = this.items.length;
    console.log(itemLength);
    const newItem =  this.formBuilder.group({

      itemId: [itemLength + 1],
      itemName: [''],
      itemDesc: [''],
      itemDone: ['', Validators.requiredTrue],
    });

    this.items.push(newItem);

   }
   
   removeItem(itemid){
    console.log('remove item clicked');
    console.log(itemid);

    this.items.removeAt(itemid);
  }
}
