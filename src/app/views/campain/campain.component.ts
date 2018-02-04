import { Component, OnInit } from '@angular/core';
import { ViewSettingsService } from '../../view-settings.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-campain',
  templateUrl: './campain.component.html',
  styleUrls: ['./campain.component.scss']
})

export class CampainComponent implements OnInit {
  backgroundUrl: string = environment.apiUrl + 'background/';
  musicUrl: string = environment.apiUrl + 'music/';
  settings;

  constructor(private viewSettings: ViewSettingsService) { 
    this.viewSettings.getSettings().subscribe(res => this.settings = res);
  }

  ngOnInit() {
  }

  audioEnded() {
    this.settings.music += this.viewSettings.makeid();
  }

}
