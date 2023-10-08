import { Component } from '@angular/core';

@Component({
  selector: 'shared-description',
  templateUrl: 'description.component.html',
  styleUrls: ['description.component.css']
})

export class DescriptionComponent {
  public iconoTruck: string = "../../../assets/icons/iconentrega.png"
  public iconoCheck: string = "../../../assets/icons/iconcheque.png"
  public iconoCard: string = "../../../assets/icons/icontarjeta-de-crdito.png"
  public iconoPlant: string = "../../../assets/icons/iconplanta.png"

}
