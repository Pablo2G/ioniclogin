import { Injectable } from '@angular/core';
//Importamos FIREAUTH
import { AngularFireAuth } from '@angular/fire/auth';
//Impormos nuestra clase usuario de /shared/user.cass.ts
import{ User } from '../shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //creamos una propiedad para saber si nuestro usuario esta logeado
  public isLogged: any = false;
  //Inyectamos en nuestro en nuestro constructor FireAuth
  constructor(public afAuth: AngularFireAuth) { 
    //Esta propiedad nos sierve para que devuelba el usuario si esta logeado sino
    //devuelve un null
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }
  
  //Login - Metodo para el login
  async onLogin (user: User){
    try{
      //Comprobamos que el login es correcto
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }catch (error){
      //Si hay error en login lo capturamos y mostramos en error en la consola
      console.log('Error on login user', error);
    }
  }

  //register - Metodo para registrar usuario
  async onRegister (user: User){
    try{
      //Insertamos el registro
      return await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      )
    }catch(error){
      //Si hay error lo mostramos en pantalla
      console.log('Error on register user', error);
    }
  }

}
