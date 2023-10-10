import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'oneProduct-view',
  templateUrl: './one-product-view.component.html',
  styleUrls: ['./one-product-view.component.css']
})
export class OneProductViewComponent implements OnInit {
  constructor (private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params) => {
        console.log({params: params["id"]})
      })
  }
}
