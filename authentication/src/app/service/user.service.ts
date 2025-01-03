import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, filter } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getUsersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any[]>(this.getUsersUrl).pipe(
      catchError((error) => {
        console.error('Error fetching users', error);
        return of([]); // Return an empty array in case of error
      })
    );
  }

}
