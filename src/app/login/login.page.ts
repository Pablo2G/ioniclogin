import { Component, OnInit } from '@angular/core';
//Importamos el router
import {Router} from '@angular/router';
//Importamos el AuthService de firebase
import { AuthService } from '../services/auth.service';
//Imporamos nuestra clase User 
import { User } from '../shared/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private router: Router, private authSvc: AuthService) { }

  ngOnInit() {
  }

}
