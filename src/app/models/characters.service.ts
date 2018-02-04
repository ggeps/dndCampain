import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';


@Injectable()
export class CharactersService {

  constructor(private http: Http) { }

  private charactersSubject = new BehaviorSubject<any>([]);
  characterList = this.charactersSubject.asObservable();

  getCharacters() {
    console.log(environment.apiUrl);
      return this.http.get
        (
          environment.apiUrl + 'characters'
        );
  }

}
