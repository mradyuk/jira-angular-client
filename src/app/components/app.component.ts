import { Component, OnInit } from '@angular/core';

import {Project} from '../classes/kpi.project';
import { JiraService } from '../services/jira.service';

@Component({
  selector: 'kpi-app',
  templateUrl:  './kpi.component.html'
})

export class AppComponent implements OnInit {
  title = 'KPI Report';
  projects: Project[];

constructor(private jiraService: JiraService) {}

 ngOnInit(): void {
       this.projects = this.jiraService.getSampleProjects();
       
  }
}
