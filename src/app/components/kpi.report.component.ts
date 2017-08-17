import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { JiraService } from '../services/jira.service';
import { Issue } from '../classes/jira.issue';
import { Query } from '../classes/jira.issue.query';



@Component({
    //selector: 'kpi-report',
    templateUrl: './kpi.report.component.html'
})

export class KpiReportComponent implements OnInit {
    private title = 'KPI Report';

    private project: string;
    private fixVersion: string;
    private component: string;

    private totalShowStopperQuery: Query;
    private totalShowstopperIssues: Issue[];

    private totalStoryQuery: Query;
    private totalStoryIssues: Issue[];

    private showStopperQuery: Query;
    private showStopperIssues: Issue[];

    private highLevelQuery: Query;
    private highLevelIssues: Issue[];

    private mediumLevelQuery: Query;
    private mediumLevelIssues: Issue[];

    private lowLevelQuery: Query;
    private lowLevelIssues: Issue[];

    private defectsInBioviaEnvQuery: Query;
    private defectsInBioviaEnvIssues: Issue[];

    private jql: string;

    constructor(private route: ActivatedRoute,
        private router: Router, private jiraService: JiraService) {
        this.totalShowStopperQuery = new Query;
        this.totalShowstopperIssues = [];

        this.totalStoryQuery = new Query;
        this.totalStoryIssues = [];

        this.showStopperQuery = new Query;
        this.showStopperIssues = [];

        this.highLevelQuery = new Query;
        this.highLevelIssues = [];

        this.highLevelQuery = new Query;
        this.highLevelIssues = [];

        this.mediumLevelQuery = new Query;
        this.mediumLevelIssues = [];

        this.lowLevelQuery = new Query;
        this.lowLevelIssues = [];

        this.defectsInBioviaEnvQuery = new Query;
        this.defectsInBioviaEnvIssues = [];
    }

    ngOnInit(): void {

        const PRIORITY_SHOWSTOPPER = 'Showstopper';
        const PRIORITY_HIGH = 'High';
        const PRIORITY_MEDIUM = 'Medium';
        const PRIORITY_LOW = 'Low';
        const STATUS_RESOLVED = 'Resolved';
        const STATUS_DONE = 'Done';


        /* let name = this.route.snapshot.paramMap.get('name');*/

        this.route.params.subscribe((params: Params) => {
            this.project = params['project'];
            this.fixVersion = params['fixVersion'];
            this.component = params['component'];
        });

        console.log('param', this.project, this.fixVersion, this.component);

        this.jql = "project = " + this.project;

        if (this.component !== '') {
            this.jql += " AND component =  " + this.component;
        } if (this.fixVersion !== '') {
            this.jql += " AND fixVersion = " + this.fixVersion;
        }


        this.getTotalShowStoppers();
        this.getTotalStories();
        this.getShowstoppersDefectsInProgress();
        this.getHighDefectsInProgress();
        this.getMediumDefectsInProgress();
        this.getLowDefectsInProgress();
        this.getDefectdInBioviaEnv();

    }

    private getTotalShowStoppers() {

        let jqlQuery = this.jql;
        jqlQuery += " AND priority = Showstopper";

        this.getIssuesService(jqlQuery).then(query => {
            this.totalShowStopperQuery = query;
            this.totalShowstopperIssues = this.totalShowStopperQuery.issues;
        });
    }

    private getTotalStories() {

        let jqlQuery = this.jql;
        jqlQuery += " AND type = Story";

        this.getIssuesService(jqlQuery).then(query => {
            this.totalStoryQuery = query;
            this.totalStoryIssues = [];

            for (let issue of this.totalStoryQuery.issues) {
                let status = issue.fields.status.name;

                if (status !== ("Resolved" || "Done")) {
                    this.totalStoryIssues.push(issue);

                }
            }
        });
    }


    private getShowstoppersDefectsInProgress() {

        let jqlQuery = this.jql;
        jqlQuery += " AND type = Defect";
        jqlQuery += " AND priority = Showstopper";
        jqlQuery += " AND status not in (Resolved, Done)"

        this.getIssuesService(jqlQuery).then(query => {
            this.showStopperQuery = query;         
            this.showStopperIssues = this.showStopperQuery.issues;
        });
    }

    private getHighDefectsInProgress() {

        let jqlQuery = this.jql;
        jqlQuery += " AND type = Defect";
        jqlQuery += " AND priority = High";
        jqlQuery += " AND status not in (Resolved, Done)"

        this.getIssuesService(jqlQuery).then(query => {
            this.highLevelQuery = query;
            this.highLevelIssues = this.highLevelQuery.issues;
        });
    }

    private getMediumDefectsInProgress() {

        let jqlQuery = this.jql;
        jqlQuery += " AND type = Defect";
        jqlQuery += " AND priority = Medium";
        jqlQuery += " AND status not in (Resolved, Done)"

        this.getIssuesService(jqlQuery).then(query => {
            this.mediumLevelQuery = query;
            this.mediumLevelIssues = this.mediumLevelQuery.issues;
        });
    }

    private getLowDefectsInProgress() {

        let jqlQuery = this.jql;
        jqlQuery += " AND type = Defect";
        jqlQuery += " AND priority = Low";
        jqlQuery += " AND status not in (Resolved, Done)"

        this.getIssuesService(jqlQuery).then(query => {
            this.lowLevelQuery = query;
            this.lowLevelIssues = this.lowLevelQuery.issues;
        });
    }

    private getDefectdInBioviaEnv(){
        let jqlQuery = this.jql;
        jqlQuery += ' AND type = Defect';
        jqlQuery += ' AND environment ~ "BIOVIA*"';

        this.getIssuesService(jqlQuery).then(query => {
            this.defectsInBioviaEnvQuery = query;
            this.defectsInBioviaEnvIssues = this.defectsInBioviaEnvQuery.issues;
        });
    }


    private getIssuesService(jql: string): Promise<any> {
        return this.jiraService.getIssues(jql);

    }
}
