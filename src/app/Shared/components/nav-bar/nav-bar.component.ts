import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public showNavBar: boolean = false;
  public showSearchBar: boolean = false;
  public activeProduct!: boolean;
  public currentUrl: string;

  constructor (private location: Location) {
    this.currentUrl = this.location.path();
  }

  @Input()
  public setPosition!: boolean;

  handleShowNavBar():void {
    this.showNavBar = !this.showNavBar;
  }

  handleShowSearchBar():void {
    this.showSearchBar = !this.showSearchBar;
  }

  ngOnInit(): void {
    this.activeProduct = this.currentUrl === "/products"
  }

}
