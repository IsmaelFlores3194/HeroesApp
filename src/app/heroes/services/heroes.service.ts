import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class HeroesService {


  private baseUrl : string = environment.baseUrl;

  constructor(private http: HttpClient) { }


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);

  }


  getHeroeById( id : string ): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${ id }`)
    .pipe(catchError( error => of(undefined))


  );
}

  getSuggestions( query : string ): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${ query }&_limit=6`);
  }









}



