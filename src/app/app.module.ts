import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { PeopleService } from './people.service';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PeopleService,


  ],
  providers: [PeopleService],

  bootstrap: [AppComponent]
})
export class AppModule { }
