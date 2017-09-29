import { Priority } from '../classes/jira.priority';
import { Resolution } from '../classes/jira.resolution';
import { IssueType } from '../classes/jira.issuetype';
import { Status } from '../classes/jira.status';
import { IssueLink } from '../classes/jira.issue.link';

export class Fields {
    issuetype: IssueType; 
    components: string[];
    fixVersions: string[];
    resolution: Resolution;
    priority: Priority;
    status: Status;
    issuelinks: IssueLink[];
}
