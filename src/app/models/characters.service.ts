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
      return this.http.get
        (
          environment.apiUrl + 'characters'
        );
  }

  saveCharacter(newCharacter) {
    return this.http.post(
      environment.apiUrl + 'character',
      newCharacter
    ).toPromise();
  }

}
