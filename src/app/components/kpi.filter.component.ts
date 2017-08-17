import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../classes/jira.project';
import { JiraService } from '../services/jira.service';

@Component({
  selector: 'kpi-filter',
  templateUrl: './kpi.filter.component.html'
})

export class KpiFilterComponent implements OnInit {
  title = 'KPI Report';
  projects: Project[];
  project: string;
  fixVersions: any[];
  fixVersion: string;
  components: any[];
  component: string;

  constructor(private router: Router, private jiraService: JiraService) { }

  ngOnInit(): void {
    this.jiraService.getProjects().then(projects => { this.projects = projects; console.log('projects', projects); });

  }

  onProjectChange() {
    console.log('project', this.project);
    this.jiraService.getFixVersions(this.project)
      .then(fixVersions => {
        this.fixVersions = fixVersions;
        console.log('fixVersion', fixVersions);
      });
    this.jiraService.getComponents(this.project)
      .then(components => {
        this.components = components;
        console.log('components', components);
      });
  }

  loadReport() {   
    this.router.navigate(['/report', this.project, this.fixVersion, this.component]);
  }
}
