import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { CampainComponent } from './views/campain/campain.component';
import { ViewSettingsService } from './view-settings.service';
import { CharactersService } from './models/characters.service';
import { ControllerComponent } from './views/controller/controller.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AddCharactersComponent } from './views/add-characters/add-characters.component';
import { GridComponent } from './views/grid/grid.component';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { GridModelService } from './models/grid-model.service';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    CampainComponent,
    ControllerComponent,
    AddCharactersComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    HttpModule,
    HttpClientModule,
    Ng2DragDropModule.forRoot(),
    FormsModule
  ],
  providers: [
    ViewSettingsService,
    CharactersService,
    GridModelService
  
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
