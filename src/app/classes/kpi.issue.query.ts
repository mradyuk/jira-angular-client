import { Issue } from '../classes/kpi.issue';

export class Query {
    total: number;
    issues: Issue[];

    
    expand: string;
    startAt: number;
	maxResults: number;
}
