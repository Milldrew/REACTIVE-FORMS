import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateReadDeleteService {
  constructor(private http: HttpClient) {}

  createPerson$(person: any) {
    const payload = this.http
      .post('http://192.168.0.143:3000/people', person)
      .pipe(tap((person) => console.log(person)));
    payload.subscribe((data) => console.log({ data }));
    console.log({ payload });
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
