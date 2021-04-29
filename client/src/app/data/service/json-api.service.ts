import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const BASE_URL = 'http://192.168.1.5:8081/api';

@Injectable({
  providedIn: 'root',
})
export class JsonApiService {
  private httpHeaders;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getHttpHeaders(): HttpHeaders {
    return this.httpHeaders;
  }

  getHttpClient(): HttpClient {
    return this.http;
  }
}
