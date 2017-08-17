import { Priority } from '../classes/kpi.priority';
import { Resolution } from '../classes/kpi.resolution';
import { IssueType } from '../classes/kpi.issuetype';

export class Fields {
    issuetype: IssueType;

    components: string[];
    fixVersions: string[];
    resolution: Resolution;
    priority: Priority;
}
