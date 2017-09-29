import { Issue } from '../classes/jira.issue';
import { Query } from '../classes/jira.issue.query';

export class KPIWrapper {


    totalShowStopperQuery: Query;
    totalShowstopperIssues: Issue[];

    totalStoryQuery: Query;
    totalStoryIssues: Issue[];

    showStopperQuery: Query;
    showStopperIssues: Issue[];

    highLevelQuery: Query;
    highLevelIssues: Issue[];

    mediumLevelQuery: Query;
    mediumLevelIssues: Issue[];

    lowLevelQuery: Query;
    lowLevelIssues: Issue[];

    defectsInBioviaEnvQuery: Query;
    environmentsBiovia: string;

    defectsInCustomerEnvQuery: Query;
    environmentsCustomer: string;

    storieswithoutTC: string[];
    // notPassedTC: string[];
    notPassedTC: Set<string>;
    testCasesAVG: Number;

    constructor() {
        this.totalShowStopperQuery = new Query();
        this.totalShowstopperIssues = [];

        this.totalStoryQuery = new Query();
        this.totalStoryIssues = [];


        this.showStopperQuery = new Query();
        this.showStopperIssues = [];

        this.highLevelQuery = new Query();
        this.highLevelIssues = [];

        this.highLevelQuery = new Query();
        this.highLevelIssues = [];

        this.mediumLevelQuery = new Query();
        this.mediumLevelIssues = [];

        this.lowLevelQuery = new Query();
        this.lowLevelIssues = [];

        this.defectsInBioviaEnvQuery = new Query();
        this.defectsInCustomerEnvQuery = new Query();

        this.environmentsBiovia = '';
        this.environmentsCustomer = '';

        this.storieswithoutTC = [];
        //this.notPassedTC = [];
        this.notPassedTC = new Set();
        this.testCasesAVG = 0;
    }

}