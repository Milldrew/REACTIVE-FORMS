import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateReadDeleteService {
  people: any;
  constructor(private http: HttpClient) {}
  getPeople() {
    this.http
      .get('http://192.168.0.143:3000/people')
      .subscribe((value) => (this.people = value));
  }
  createPerson() {
    console.log('hi');
    this.http
      .get('http://192.168.0.143:3000/people')
      .pipe(tap((data) => console.log(data)));
  }
}
