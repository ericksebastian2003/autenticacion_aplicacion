import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  // Método para registrar un usuario
  async register({ email, password }: { email: string, password: string }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCredential;
    } catch (error) {
      console.error('Error durante el registro:', error); // Registra el error
      throw error; // Lanza el error para que el llamador lo maneje
    }
  }

  // Método para iniciar sesión
  async login({ email, password }: { email: string, password: string }) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential;
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error); // Registra el error
      throw error; // Lanza el error para que el llamador lo maneje
    }
  }

  // Método para cerrar sesión
  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Error al cerrar sesión:', error); // Registra el error
      throw error; // Lanza el error para que el llamador lo maneje
    }
  }
}
