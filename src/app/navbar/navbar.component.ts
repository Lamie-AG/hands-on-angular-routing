import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public login: AuthenticationService) { }

  ngOnInit(): void {
  }

}
