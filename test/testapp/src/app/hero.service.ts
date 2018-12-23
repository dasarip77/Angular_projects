import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'

  constructor(private http: HttpClient, private messageService: MessageService) { }
  
 /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id:number): Observable<Hero>{
    this.messageService.add('HeroService: fetched hero id=${id}');
    return of(Heroes.find(hero => hero.id == id));
  }

  getAllUsers (): Observable<User[]> {
    return this.http.get<User[]>('https://reqres.in/api/unknown');
  }

  private log(message:string){
    this.messageService.add('HeroService: '+ message);
  };
}
