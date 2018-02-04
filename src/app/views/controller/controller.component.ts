import { Component, OnInit } from '@angular/core';
import { ViewSettingsService } from '../../view-settings.service';
import { environment } from '../../../environments/environment';
import { CharactersService } from '../../models/characters.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})


export class ControllerComponent implements OnInit {

  settings;
  picturePath: string = environment.apiUrl + 'character/picture/';
  appCharacters;
  selectedCharacters= [];

  constructor(private viewSettings: ViewSettingsService, private charsSvs: CharactersService) { 
      this.charsSvs.getCharacters()
      .map(res => res.json())
      .subscribe(res => this.appCharacters = res);
  }

  ngOnInit() {
    this.resetSettings();
    this.appCharacters = [];
  }

  resetSettings() {
    this.settings = {
      background: '',
      music: '',
      characters: [],
      cleanBackground: '',
      cleanMusic: ''
    };
  }

  changeSettings() {
    this.viewSettings.changeSettings(this.settings.background, this.settings.music, ['monster1', 'monster2', 'monster3']);
    //this.resetSettings();
  }

  changeBackground(background) {
    this.settings.cleanBackground = background;
    this.settings.background = background + '/' + this.viewSettings.makeid();
  }

  changeMusic(music) {
    this.settings.cleanMusic = music;
    this.settings.music = music + '/' + this.viewSettings.makeid();
  }

  isSelectedBackground(option) {
    if (option === this.settings.cleanBackground) return 'selected';
    return 'not-selected';
  }

  isSelectedMusic(option) {
    if (option === this.settings.cleanMusic) return 'selected';
    return 'not-selected'; 
  }

}
