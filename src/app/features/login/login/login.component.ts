import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";

  constructor(public authentication: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.username);
    if (this.authentication.login(this.username, this.password)) {
      this.router.navigate(['/home'])
    }
  }

}
