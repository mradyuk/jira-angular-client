import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/switchMap';

import { KPIWrapper } from '../classes/kpi.wrapper';
import { Query } from '../classes/jira.issue.query';
import { Project } from '../classes/jira.project';

import { JiraService } from '../services/jira.service';


@Component({
    selector: 'kpi-app',
    templateUrl: './kpi.component.html'
})

export class KpiComponent implements OnInit {
    // private formCtrl: FormControl;
    public MAX_RESULTS = 500;
    public JIRA_STARTS_WITH = "https://jira.accelrys.com";
    public title = 'Project Quality';
    private projects: Project[];
    private project: string;
    private filteredProjects: any;
    private fixVersions: any[];
    private fixVersion: string;
    private components: any[];
    private component: string;
    private labels: any[];
    private label: string;

    private jiraURL: string;
    private jiraIsUsed: boolean;
    //private  projectURL: string;

    private wrapper: KPIWrapper;
    private jql: string;
    private errorMsg: string;

    private HTMLTemplate: string;

    private projectsNames: string[];

    constructor(private jiraService: JiraService) {

        this.HTMLTemplate = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    }

    ngOnInit(): void {

        this.jiraService.getProjects().then(projects => {
            this.projects = projects;
        });
    }




    onProjectChange() {

        this.component = "All";
        this.fixVersion = "All";
        this.loadReport();

        this.jiraService.getFixVersions(this.project)
            .then(fixVersions => {
                this.fixVersions = fixVersions;
                this.fixVersion = 'All';
                //console.log('fixVersion', fixVersions);

                this.fixVersions.sort(function (a, b) {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
            });
        this.jiraService.getComponents(this.project)
            .then(components => {
                this.components = components;
                this.component = 'All';
                // console.log('components', components);
            });


    }

    private onChange() {
        this.loadReport();
    }

    loadReport() {

        this.jiraService.getConnectionDetails().then(jiraurl => {
            this.jiraURL = jiraurl;
            if (this.jiraURL.startsWith(this.JIRA_STARTS_WITH)) {
                this.jiraIsUsed = true;
            } else {
                this.jiraIsUsed = false;
            }
        });

        this.wrapper = new KPIWrapper();

        const PRIORITY_SHOWSTOPPER = 'Showstopper';
        const PRIORITY_HIGH = 'High';
        const PRIORITY_MEDIUM = 'Medium';
        const PRIORITY_LOW = 'Low';
        const STATUS_RESOLVED = 'Resolved';
        const STATUS_DONE = 'Done';

        ///// initial setup of JIRA JQL request
        this.jql = "project = " + this.project;

        if (this.component !== "All") {
            this.jql += " AND component =  '" + this.component + "'";
        } if (this.fixVersion !== "All") {
            this.jql += " AND fixVersion = '" + this.fixVersion + "'";
        }


        this.getTotalShowStoppers();
        this.getTotalStories();
        this.getShowstoppersDefectsInProgress();
        this.getHighDefectsInProgress();
        this.getMediumDefectsInProgress();
        this.getLowDefectsInProgress();
        this.getDefectsInBioviaEnv();
        this.getDefectsInCustomerEnv();
    }

    private getTotalShowStoppers() {


        let jqlQuery = this.jql;
        jqlQuery += " AND priority = Showstopper";
        jqlQuery += "&maxResults=" + this.MAX_RESULTS;

        // console.log('getTotalShowStoppers', jqlQuery);

        this.getIssuesService(jqlQuery).then(query => {
            this.wrapper.totalShowStopperQuery = query;
            this.wrapper.totalShowstopperIssues = this.wrapper.totalShowStopperQuery.issues;
        }).catch(error => this.handleError(error));
    }

    private handleError(error: any) {
        console.error('An error in component is handled', error);
        console.log(error.status);
        // if (error.status === 400 || error.status === '400') {
        this.errorMsg = 'You have no rights to access project ';
        //  }
    }


    private getTotalStories() {

        let jqlQuery = this.jql;
        jqlQuery += " AND type = Story";
        jqlQuery += "&maxResults=" + this.MAX_RESULTS;
        //console.log('getTotalStories', jqlQuery);

        this.getIssuesService(jqlQuery).then(query => {

            this.wrapper.totalStoryQuery = query;
            this.wrapper.totalStoryIssues = [];

            for (let issue of this.wrapper.totalStoryQuery.issues) {
                let status = issue.fields.status.name;

                if (status !== ("Resolved" || "Done" || "Closed")) {
                    this.wrapper.totalStoryIssues.push(issue);
                }
            }
            this.getAvgTestCasePerStory(query);
        });
    }

    private getAvgTestCasePerStory(query: Query) {

        let allStories = query.issues;
        let storiesCount = query.total;
        let sumTC = 0;

        for (let issue of allStories) {

            let allTC = [];
            let issueLinks = issue.fields.issuelinks;

            for (let link of issueLinks) {
                if (link.inwardIssue) {
                    if (link.inwardIssue.fields.issuetype.name === 'Test Case') {
                        let linkKey = link.inwardIssue.key;
                        console.log('Test case', linkKey)
                        allTC.push(linkKey);

                        if (link.inwardIssue.fields.status.name !== 'Passed') {
                            console.log('Test case - not passed', linkKey)
                           // this.wrapper.notPassedTC.push(linkKey);
                           this.wrapper.notPassedTC.add(linkKey);
                        }
                    }
                }

                if (link.outwardIssue) {
                    if (link.outwardIssue.fields.issuetype.name === 'Test Case') {
                        let linkKey = link.outwardIssue.key;
                        console.log('Test case', linkKey)
                        allTC.push(linkKey);

                        if (link.outwardIssue.fields.status.name !== 'Passed') {
                            console.log('Test case - not passed', linkKey)
                           // this.wrapper.notPassedTC.push(linkKey);
                            this.wrapper.notPassedTC.add(linkKey);
                        }
                    }
                }

            }
            console.log('allTC', allTC);
            if (allTC.length == 0) {
                this.wrapper.storieswithoutTC.push(issue.key);
                console.log('storieswithoutTC', this.wrapper.storieswithoutTC);
            } else {
                sumTC += allTC.length;
            }
        }

        if (storiesCount != 0) {
            this.wrapper.testCasesAVG = Number((sumTC / storiesCount).toFixed(2));
        } else {
            this.wrapper.testCasesAVG = 0;
        }
        // console.log('storieswithoutTC Final', this.wrapper.storieswithoutTC);
        //console.log('notPassedTC', this.wrapper.notPassedTC);
    }


    private getShowstoppersDefectsInProgress() {

        let jqlQuery = this.jql;
        jqlQuery += " AND type = Defect";
        jqlQuery += " AND priority = Showstopper";
        jqlQuery += " AND status not in (Resolved, Done, Closed)";
        jqlQuery += "&maxResults=" + this.MAX_RESULTS;

        //console.log('getShowstoppersDefectsInProgress', jqlQuery);

        this.getIssuesService(jqlQuery).then(query => {
            this.wrapper.showStopperQuery = query;
            this.wrapper.showStopperIssues = this.wrapper.showStopperQuery.issues;
        });
    }

    private getHighDefectsInProgress() {

        let jqlQuery = this.jql;
        jqlQuery += " AND type = Defect";
        jqlQuery += " AND priority = High";
        jqlQuery += " AND status not in (Resolved, Done, Closed)";
        jqlQuery += "&maxResults=" + this.MAX_RESULTS;

        //console.log('getHighDefectsInProgress', jqlQuery);

        this.getIssuesService(jqlQuery).then(query => {
            this.wrapper.highLevelQuery = query;
            this.wrapper.highLevelIssues = this.wrapper.highLevelQuery.issues;
        });
    }

    private getMediumDefectsInProgress() {

        let jqlQuery = this.jql;
        jqlQuery += " AND type = Defect";
        jqlQuery += " AND priority = Medium";
        jqlQuery += " AND status not in (Resolved, Done, Closed)";
        jqlQuery += "&maxResults=" + this.MAX_RESULTS;


        this.getIssuesService(jqlQuery).then(query => {
            this.wrapper.mediumLevelQuery = query;
            this.wrapper.mediumLevelIssues = this.wrapper.mediumLevelQuery.issues;
        });
    }

    private getLowDefectsInProgress() {

        let jqlQuery = this.jql;
        jqlQuery += " AND type = Defect";
        jqlQuery += " AND priority = Low";
        jqlQuery += " AND status not in (Resolved, Done, Closed)";
        jqlQuery += "&maxResults=" + this.MAX_RESULTS;

        this.getIssuesService(jqlQuery).then(query => {
            this.wrapper.lowLevelQuery = query;
            this.wrapper.lowLevelIssues = this.wrapper.lowLevelQuery.issues;
        });
    }

    private getDefectsInBioviaEnv() {
        let jqlQuery = this.jql;
        jqlQuery += ' AND type = Defect';
        jqlQuery += ' AND environment ~ "BIOVIA*"';
        jqlQuery += "&maxResults=" + this.MAX_RESULTS;

        this.getIssuesService(jqlQuery).then(query => {
            this.wrapper.defectsInBioviaEnvQuery = query;
            let defectsCount = 0;
            let environmentsSet = new Set();
            for (let issue of query.issues) {
                let env = issue.fields.environment;
                if (env.toUpperCase().startsWith('BIOVIA')) {
                    environmentsSet.add(issue.fields.environment.toUpperCase());
                    defectsCount++;
                }
            }
            for (var env of Array.from(environmentsSet.values())) {
                this.wrapper.environmentsBiovia += env + ';'
            }
            this.wrapper.environmentsBiovia = this.wrapper.environmentsBiovia.substring(0, this.wrapper.environmentsBiovia.length - 1);
            this.wrapper.defectsInBioviaEnvQuery.total = defectsCount;
        });
    }

    private getDefectsInCustomerEnv() {
        let jqlQuery = this.jql;
        jqlQuery += ' AND type = Defect';
        jqlQuery += ' AND environment ~ "CUSTOMER*"';
        jqlQuery += "&maxResults=" + this.MAX_RESULTS;


        this.getIssuesService(jqlQuery).then(query => {

            this.wrapper.defectsInCustomerEnvQuery = query;
            let defectsCount = 0;
            let environmentsSet = new Set();
            for (let issue of query.issues) {
                let env = issue.fields.environment;
                if (env.toUpperCase().startsWith('CUSTOMER')) {
                    environmentsSet.add(issue.fields.environment.toUpperCase());
                    defectsCount++;
                }
            }

            for (var env of Array.from(environmentsSet.values())) {
                this.wrapper.environmentsCustomer += env + ';'
            }
            this.wrapper.environmentsCustomer = this.wrapper.environmentsCustomer.substring(0, this.wrapper.environmentsCustomer.length - 1);
            this.wrapper.defectsInCustomerEnvQuery.total = defectsCount;
        });
    }

    private getIssuesService(jql: string): Promise<any> {
        return this.jiraService.getIssues(jql);

    }

    private exportToExcel() {

        /*let tableHTML = document.getElementById('reportTable').innerHTML;
        let tblWithHyperlinks = tableHTML;
        
        let links = document.getElementsByName('linkToIssue');
    
        [].forEach.call(links, function (link: any) {
          let hrefAttr = link.getAttribute("href");
          let valueAttr = link.innerHTML;
          let linkExcelStyle = '=HYPERLINK("' + hrefAttr + '";"' + valueAttr + '")';
          console.log('linkExcelStyle', linkExcelStyle);
          tblWithHyperlinks.replace(link, linkExcelStyle);
          console.log('tblWithHyperlinks', tblWithHyperlinks);
        });*/

        var uri = 'data:application/vnd.ms-excel;base64,';
        var fileName = this.project + ' ' + new Date().toISOString().split('T')[0] + '.xls';

        let tbl = document.getElementById('hiddenReportTable');
        var ctx = {
            worksheet: this.project || 'Project Quality',
            table: tbl.innerHTML
        };

        // window.location.href = uri + base64(format(this.HTMLTemplate, ctx));
        (<HTMLAnchorElement>document.getElementById('exportLink')).href = uri + base64(format(this.HTMLTemplate, ctx));
        (<HTMLAnchorElement>document.getElementById('exportLink')).download = fileName;
        document.getElementById('exportLink').click();
    }

}
declare function unescape(s: string): string;
function base64(s: any) { return window.btoa(unescape(encodeURIComponent(s))) };
function format(s: any, c: any) { return s.replace(/{(\w+)}/g, function (m: any, p: any) { return c[p]; }) };  