import { Issue} from '../classes/jira.issue';

export class IssueLink{

    id: string;
    self: string;
    type: string;
    outwardIssue: Issue;
    inwardIssue: Issue;
    
}