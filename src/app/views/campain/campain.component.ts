import { Component, OnInit } from '@angular/core';
import { ViewSettingsService } from '../../view-settings.service';
import { environment } from '../../../environments/environment';
import { GridModelService } from '../../models/grid-model.service';
@Component({
  selector: 'app-campain',
  templateUrl: './campain.component.html',
  styleUrls: ['./campain.component.scss']
})

export class CampainComponent implements OnInit {
  backgroundUrl: string = environment.apiUrl + 'background/';
  musicUrl: string = environment.apiUrl + 'music/';
  imagesUrl: string = environment.apiUrl + 'character/picture/';
  settings:any = {};

  constructor(private viewSettings: ViewSettingsService, private gridModel: GridModelService) { 
    this.viewSettings.getSettings().subscribe(res => this.settings = res);
    /*let settings = this.setSetting;
    this.viewSettings.getSettings().subscribe(function(data) {
      settings(data);
    });*/
  }

  ngOnInit() {
    this.settings.character = [];
  }

   public setSetting = (newSettings) => {
    this.settings = newSettings;
    this.gridModel.changeGridSize(newSettings.gridHeight, newSettings.gridWidth);
  }

  audioEnded() {
    this.settings.music += this.viewSettings.makeid();
  }

}
