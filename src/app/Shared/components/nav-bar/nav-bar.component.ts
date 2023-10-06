import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  public showNavBar: boolean = false;
  public showSearchBar: boolean = false;

  @Input()
  public setPosition!: boolean;

  handleShowNavBar():void {
    this.showNavBar = !this.showNavBar;
  }

  handleShowSearchBar():void {
    this.showSearchBar = !this.showSearchBar;
  }
}
