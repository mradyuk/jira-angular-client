import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { KpiComponent } from './components/kpi.component';
import { KpiFilterComponent } from './components/kpi.filter.component';
import { KpiReportComponent } from './components/kpi.report.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

import { JiraService } from './services/jira.service';

const appRoutes: Routes = [

  { path: 'report/:project/:fixVersion/:component', component: KpiReportComponent }
 // { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    KpiComponent, KpiFilterComponent, KpiReportComponent, PageNotFoundComponent
  ],
  bootstrap: [KpiComponent],
  providers: [JiraService]
})
export class AppModule { }
