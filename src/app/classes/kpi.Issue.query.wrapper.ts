import { Issue } from '../classes/jira.issue';
import { Query } from '../classes/jira.issue.query';

export class IssueQueryWrapper {
    query: Query;
    issues: Issue[];
    total: number;

    constructor() {
        this.query = new Query();
        this.issues = [];
        this.total = 0;
    }

}