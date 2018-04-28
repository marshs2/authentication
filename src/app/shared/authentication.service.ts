import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthenticationService {

  isLoggedIn: boolean = false;

  constructor(
    private local: LocalStorageService
  ) { }

  helper = new JwtHelperService();

  isAuthenticated() {

      debugger;
    if(this.local.getToken()) {
      this.isLoggedIn = !this.helper.isTokenExpired(this.local.getToken());
      return this.isLoggedIn;
    }

    return false;
  }

}
