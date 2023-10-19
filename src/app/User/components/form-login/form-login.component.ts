import { Component } from '@angular/core';
import { Form } from '../../interfaces/Form.interfaces';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  constructor (private userService: UserService) {}

  get typeForm():boolean {
    return this.userService.changeTypeForm
  }

  public typeInputPassword:string = "password";
  public form: Form = {
    name: "",
    email: "",
    password: ""
  }

  handleTypeInputPassword() {
    console.log(this.typeForm)
    if (this.typeInputPassword === "password") {
      this.typeInputPassword = "text"
      setTimeout(()=>{
        this.typeInputPassword = "password"
      },1000)
    }
  }
}
