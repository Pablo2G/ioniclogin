import { Component, OnInit } from '@angular/core';
//Importamos el router
import {Router} from '@angular/router';
//Importamos el AuthService de firebase
import { AuthService } from '../services/auth.service';
//Imporamos nuestra clase User 
import { User } from '../shared/user.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  //Creamos una instancia de nuestra clase
  user: User = new User();
  //Inyectamos AuthService
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {}

  //Creamos el metodo asyncrono register
  async onRegister(){
    //Constante que espera que la operacion haya sido correcta
    const user = await this.authSvc.onRegister(this.user);
    //Si es correcta por consola lo podemos ver y nos redirige a la home
    if(user){
      console.log('Succesfully created user!');
      this.router.navigateByUrl('/');
    }
  }



}
