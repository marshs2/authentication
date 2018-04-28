import { Injectable } from '@angular/core';
import { Endpoints } from '../api/endpoints';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  endpoints: any;

  constructor(
    private http: HttpClient,
  ) {
  }

  getEndpoints() {
    this.endpoints = Endpoints.getEndpoints();
  }

  post(url, params) {
    return this.http.post(url, params);
  }

}
