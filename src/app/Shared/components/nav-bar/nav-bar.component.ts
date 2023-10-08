import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  public showNavBar: boolean = false;
  public iconCar: string = "../../../assets/icons/iconcarrito-de-compras.png";
  public iconUser: string = "../../../assets/icons/iconusuario.png";
  public iconMenu: string = "../../../assets/icons/iconbarra-de-mens.png";

  @Input()
  public setPosition!: boolean;

  handleShowNavBar():void {
    this.showNavBar = !this.showNavBar;
  }
  handleShowNavBarClose():void {
    this.showNavBar = false;
  }

}
