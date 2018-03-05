import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map';

type settingsType = {
  background: string,
  music: string,
  characters: Array<string>
}
@Injectable()
export class ViewSettingsService {

  public settings = new BehaviorSubject<any>({
    background: 'default',
    music: 'adventure',
    characters: [],
    grid: false,
    gridHeight: 8,
    gridWidth: 15
  });
  constructor(private socket: Socket) {
  }

  changeSettings(newSettings) {
    this.socket.emit('newSettings', newSettings);
  }

  getSettings() {
    return this.socket
    .fromEvent('newSettings')
  }

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
}
