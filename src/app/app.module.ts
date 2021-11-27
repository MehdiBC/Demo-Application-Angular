import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { PereComponent } from './pereEtFils/pere/pere.component';
import { FilsComponent } from './pereEtFils/fils/fils.component';
import { StyleComponent } from './directive/style/style.component';
import { HighlightDirectiveDirective } from './directive/highlight-directive.directive';
import {HttpClientModule} from '@angular/common/http';
import { HiredCvComponent } from './cvTech/hired-cv/hired-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    PereComponent,
    FilsComponent,
    StyleComponent,
    HighlightDirectiveDirective,
    HiredCvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
