import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    CampainComponent,
    ControllerComponent,
    AddCharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    HttpModule,
    HttpClientModule
  ],
  providers: [
    ViewSettingsService,
    CharactersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
