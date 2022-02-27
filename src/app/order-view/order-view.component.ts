import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  paramQuery = '';
  paramQuery1 = '';
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => { //reading the data.
       this.paramQuery = data.id;
       this.paramQuery1 = data.id2;

    });
   }

  ngOnInit(): void {
  }

}
