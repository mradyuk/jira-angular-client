import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project } from '../classes/jira.project';
import { Issue } from '../classes/jira.issue';

//import { PROJECTS } from '../data/projects';
//import { QUERY } from '../data/issues';

@Injectable()
export class JiraService {

  private options = new RequestOptions();

  private jiraUrl = 'http://jiraps-test-upgrade:8080';  // URL to web api

  constructor(private http: Http) {

    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.options.headers = headers;
    this.options.withCredentials = true;

    // let body = JSON.stringify({ 'username': 'mrk2', 'password': 'Poland2017' });
    //this.login();
  }

  private login() {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.options.headers = headers;
    this.options.withCredentials = true;

    // let body = JSON.stringify({ 'username': 'mrk2', 'password': 'Poland2017' });

    /* this.http.post(this.jiraUrl + '/rest/auth/1/session', body, options)
       .toPromise()
       .then(response => { console.log('login resp ', response); })
       // let user = response.json();localStorage.setItem('currentUser', JSON.stringify(user));
       .catch(this.handleError);*/

    this.http.get(this.jiraUrl + '/plugins/servlet/kpi')
      .toPromise()
      .then(response => {
        console.log('resp', response);
        let respHeaders = response.headers;
        let setCookieHeader = respHeaders.get('Set-Cookie');
      });
  }

  getConnectionDetails(): Promise<any> {
    return this.http.get(this.jiraUrl + '/plugins/servlet/kpi')
      .toPromise()
      .then(response => response.text())
      .catch(this.handleError);
  }

  /*this.http.post(this.jiraUrl + '/rest/auth/1/session', this.options)
.toPromise()
.then(response => { console.log('login session ', response); })
// let user = response.json();localStorage.setItem('currentUser', JSON.stringify(user));
.catch(this.handleError);
  console.log('login setCookieHeader ', respHeaders);*/


  //})
  // let user = response.json();localStorage.setItem('currentUser', JSON.stringify(user));


  //  .catch(this.handleError);




  // getSampleProjects() { return PROJECTS; }
  //getSampleShowstoppers(name: string, priority: string, fixVersion:string, component: string) {
  //  return QUERY;
  //}

  getProjects(): Promise<any> {

    return this.http.get(this.jiraUrl + '/rest/api/2/project', this.options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getFixVersions(project: string): Promise<any> {

    return this.http.get(this.jiraUrl + '/rest/api/2/project/' + project + '/versions', this.options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getComponents(project: string): Promise<any> {

    return this.http.get(this.jiraUrl + '/rest/api/2/project/' + project + '/components', this.options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getIssues(jql: string): Promise<any> {

    console.log(this.jiraUrl + '/rest/api/2/search?jql=' + jql);

    return this.http.get(this.jiraUrl + '/rest/api/2/search?jql=' + jql, this.options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only   
    return Promise.reject(error);
  }

}

