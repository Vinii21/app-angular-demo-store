import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-btn-login',
  templateUrl: './btn-login.component.html',
  styleUrls: ['./btn-login.component.css']
})
export class BtnLoginComponent {
  constructor (private userService: UserService) {}

  get typeForm():boolean {
    return this.userService.changeTypeForm
  }

  handleTypeForm() {
    this.userService.handleTypeForm()
  }
}
