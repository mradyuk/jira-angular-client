import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';

import { KpiComponent } from './components/kpi.component';
//import { KpiFilterComponent } from './components/kpi.filter.component';
//import { PageNotFoundComponent } from './components/page-not-found.component';

import { JiraService } from './services/jira.service';

import {enableProdMode} from '@angular/core';

enableProdMode();


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,   
    MaterialModule,
    BrowserAnimationsModule
 
  ],
  declarations: [
    KpiComponent //, KpiFilterComponent, PageNotFoundComponent
  ],
  bootstrap: [KpiComponent],
  providers: [JiraService]
})
export class AppModule { }
