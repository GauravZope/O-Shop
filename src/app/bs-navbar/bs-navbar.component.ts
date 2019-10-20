import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { timeout } from 'q';
import { LoginService } from '../services/login.service';
import { app } from 'firebase';
import { Observable } from 'rxjs/internal/Observable';
 
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

   
  constructor(private authService : AuthService) {  }

  logout(){
    this.authService.logout();
  }
}
