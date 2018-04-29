import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '../../shared/local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;
  decodedToken: {};
  helper = new JwtHelperService();

  constructor(
    private local: LocalStorageService
  ) { }

  ngOnInit() {
    this.decodeToken();
  }

  decodeToken() {
    const token = this.local.getToken();
    if (token) {
       this.decodedToken = this.helper.decodeToken(token);
       console.log(this.decodedToken);
    }
  }
}
