import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YmlComparisonService {

  constructor(private http: HttpClient) { }
  mockUrl = 'assets/mock.json';

  getComparison() {
    return this.http.get(this.mockUrl);
  }
}
