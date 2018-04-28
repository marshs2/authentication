import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  removeToken() {
    localStorage.removeItem("token");
  }

}
