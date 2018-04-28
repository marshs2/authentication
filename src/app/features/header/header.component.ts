import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { ApiService } from '../../shared/api.service';
import { LocalStorageService } from '../../shared/local-storage.service'; 
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  signup: string;
  isLoggedIn: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private local: LocalStorageService,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.apiService.getEndpoints();
  }

  onSignup(user, password) {
    let params = {
      username: user,
      password,
      email: user + '@gmail.com'
    };
    this.signup = this.apiService.endpoints.base + this.apiService.endpoints.signup;
    this.apiService.post(this.signup, params)
      .subscribe(res => {
        this.local.setToken(res['token']);
        this.onLogin(user, password);
      });
  }

  onLogin(user, password) {
    let params = {
      user,
      password
    };
    let url = this.apiService.endpoints.base + this.apiService.endpoints.login;
    this.apiService.post(url, params)
      .subscribe(res => {
        this.local.setToken(res['token']);
        this.auth.isLoggedIn = true;
        this.router.navigate(['home']);
      });
  }

  onLogout() {
    this.local.removeToken();
    this.auth.isLoggedIn = false;
    this.router.navigate(['']);
  }

}
