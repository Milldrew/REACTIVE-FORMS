import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateReadDeleteService {
  constructor(private http: HttpClient) {}
  createUser() {
    console.log('creaet user');
    this.http
      .get('http://192.168.0.143:3000/people')
      .subscribe((value) => console.log(value));
  }
}
