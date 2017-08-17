import { Issue } from '../classes/jira.issue';

export class Query {
    total: number;
    issues: Issue[];

    
    expand: string;
    startAt: number;
	maxResults: number;
}
