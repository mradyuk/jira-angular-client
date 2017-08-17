import { Fields } from '../classes/kpi.fields';

export class Issue {
    id: string;
    self: string;
    key: string;
    fields: Fields[];


    expand: string;
    startAt: number;
    maxResults: number;
}
