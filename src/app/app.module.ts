import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { FormComponent } from './forms/forms.component';
import {FormPoster} from './services/form-poster.service'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    FormPoster
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
