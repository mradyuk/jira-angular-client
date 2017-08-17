import { Fields } from '../classes/jira.fields';

export class Issue {
    id: string;
    self: string;
    key: string;
    fields: Fields;


    expand: string;
    startAt: number;
    maxResults: number;
}
