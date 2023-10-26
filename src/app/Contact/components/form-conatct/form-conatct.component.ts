import { Component } from '@angular/core';
import { infoForm } from '../../interfaces/infoForm.interface';

@Component({
  selector: 'contact-form',
  templateUrl: './form-conatct.component.html',
  styleUrls: ['./form-conatct.component.css']
})
export class FormConatctComponent {
  public infoForm: infoForm = {
    name: "",
    lastname: "",
    email: "",
    message: ""
  }

  sendEmail():void {
    if(this.infoForm.name === "" || this.infoForm.email === "" || this.infoForm.lastname === "" || this.infoForm.message === "" ) return;
    alert("Mensaje enviado con éxito");
    this.infoForm = {
      name: "",
      lastname: "",
      email: "",
      message: ""
    }
  }
}
