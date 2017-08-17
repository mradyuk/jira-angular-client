import { StatusCategory } from '../classes/jira.status.category';

export class Status{

    self: string;
    id: string;
    description: string;
    name: string;
    statusCategory:StatusCategory;
}