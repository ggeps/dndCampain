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
  settings;

  constructor(private viewSettings: ViewSettingsService, private gridModel: GridModelService) { 
    this.settings = {
      grid: false,
    };
    let settings = this.setSetting;
    this.viewSettings.getSettings().subscribe(function(data) {
      settings(data);
    });
  }

  ngOnInit() {
    this.settings.character = [];
  }

   public setSetting = (settings) => {
    this.settings = settings;
    this.gridModel.changeGridSize(settings.gridHeight, settings.gridWidth);
  }

  audioEnded() {
    this.settings.music += this.viewSettings.makeid();
  }

}
