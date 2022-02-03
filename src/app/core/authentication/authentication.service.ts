import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  username = "John Smith";
  private password = "DoctorWho123";

  isLoggedIn = false;

  constructor() { }

  public login(username: string, password: string): boolean {
    this.isLoggedIn = (username == this.username && 
      password == this.password) 

    if(!this.isLoggedIn) {
      alert("please try again.");
    }

    return this.isLoggedIn;
  }
}
