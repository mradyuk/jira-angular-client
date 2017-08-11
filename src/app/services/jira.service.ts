import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project } from '../classes/kpi.project';

import { PROJECTS } from '../data/projects';

@Injectable()
export class JiraService {
  private jiraUrl = 'http://mradziuk.atlassian.net';
 // private jiraUrl = 'http://jiraps-test-upgrade:8080';  // URL to web api

  constructor(private http: Http) { }

  getSampleProjects(){ return PROJECTS; }

  getSampleIssue(project: string){

    let url  = this.jiraUrl + '/rest/api/2/search?jql=project=' + project;
  }

  getProjects(): Promise<Project> {
    let header = new Headers({ 'Content-Type': 'application/json' });

    return this.http.get(this.jiraUrl + '/rest/api/2/project', { headers: header })
      .toPromise()
      .then(response => response.json().data as Project[])
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

