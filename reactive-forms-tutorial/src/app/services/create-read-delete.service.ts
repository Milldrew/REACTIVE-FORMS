import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateReadDeleteService {
  people: any;
  constructor(private http: HttpClient) {}
  createPerson() {
    this.http
      .get('http://192.168.0.143:3000/people')
      .subscribe((value) => (this.people = value));
  }
  getPeople$() {
    const payload$ = this.http.get('http://192.168.0.143:3000/people').pipe(
      tap((data) => console.log({ data })),
      catchError((error) => {
        console.error(error);
        return of(error);
      })
    );
    return payload$;
  }
}
