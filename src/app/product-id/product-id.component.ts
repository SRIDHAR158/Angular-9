import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css']
})
export class ProductIdComponent implements OnInit {

  searchKeyword = '';

  constructor(private activatedRouter: ActivatedRoute) { 
    this.activatedRouter.params.subscribe(data => {
      console.log(data);
      this.searchKeyword = data.id});
  }

  ngOnInit(): void {
  }

}
