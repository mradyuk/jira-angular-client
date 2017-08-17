/*import { Project } from '../classes/kpi.project';
 
export const PROJECTS: Project[] =[
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12468",
        "id": "12468",
        "key": "ELN4593",
        "name": "(Internal) SABIC - AELN Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12468&avatarId=11579",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12468&avatarId=11579",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12468&avatarId=11579",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12468&avatarId=11579"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12169",
        "id": "12169",
        "key": "LSR3628",
        "name": "2013-14 Prof Svcs Solutions Support",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12169&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12169&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12169&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12169&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12779",
        "id": "12779",
        "key": "MMM4871",
        "name": "3M - AELN Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12779&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12779&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12779&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12779&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12478",
        "id": "12478",
        "key": "MMM4798",
        "name": "3M - AELN User Profile Extension",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12478&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12478&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12478&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12478&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11775",
        "id": "11775",
        "key": "ELN2622",
        "name": "3M - ELN",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11775&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11775&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11775&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11775&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11865",
        "id": "11865",
        "key": "ELN3629",
        "name": "3M - ELN Pilot",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11865&avatarId=11170",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11865&avatarId=11170",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11865&avatarId=11170",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11865&avatarId=11170"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10784",
        "id": "10784",
        "key": "ISE2929",
        "name": "3M - Isentris Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10784&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10784&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10784&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10784&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12983",
        "id": "12983",
        "key": "BIOVIA5978",
        "name": "3M Company: 3M Flexible Consulting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12983&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12983&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12983&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12983&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13268",
        "id": "13268",
        "key": "DS6514",
        "name": "3M Company: Phoenix - Toxicology CHS",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13268&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13268&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13268&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13268&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13267",
        "id": "13267",
        "key": "DS6790",
        "name": "3M Company: Request System",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13267&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13267&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13267&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13267&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12860",
        "id": "12860",
        "key": "ELN3329",
        "name": "AB Mauri LTD Notebook implementation ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12860&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12860&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12860&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12860&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10561",
        "id": "10561",
        "key": "ABTACD",
        "name": "Abbott - ACD",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10561&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10561&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10561&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10561&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10110",
        "id": "10110",
        "key": "ABAES",
        "name": "Abbott - AE Services (20d)",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10110&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10110&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10110&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10110&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10030",
            "id": "10030",
            "name": "Assay Explorer",
            "description": "An Assay Explorer project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10177",
        "id": "10177",
        "key": "ABISC",
        "name": "Abbott - AE Support (30d)",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10177&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10177&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10177&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10177&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10250",
        "id": "10250",
        "key": "ABTBIO",
        "name": "Abbott - Biobook Integration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10250&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10250&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10250&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10250&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10125",
        "id": "10125",
        "key": "ABISU",
        "name": "Abbott - Cheminformatics (40d)",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10125&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10125&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10125&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10125&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10176",
        "id": "10176",
        "key": "ABCRO",
        "name": "Abbott - CRO Security POC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10176&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10176&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10176&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10176&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10030",
            "id": "10030",
            "name": "Assay Explorer",
            "description": "An Assay Explorer project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12763",
        "id": "12763",
        "key": "ABBV5007",
        "name": "ABBVIE - BioReg Work",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12763&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12763&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12763&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12763&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10866",
        "id": "10866",
        "key": "2995",
        "name": "ABBVIE - DS Antibody (CRS)",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10866&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10866&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10866&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10866&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11761",
        "id": "11761",
        "key": "3340",
        "name": "ABBVIE: BioReg Supplier Information",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11761&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11761&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11761&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11761&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12464",
        "id": "12464",
        "key": "CON1234",
        "name": "Accelrys - Accelrys Notebook General",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12464&avatarId=11574",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12464&avatarId=11574",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12464&avatarId=11574",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12464&avatarId=11574"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10174",
        "id": "10174",
        "key": "ACLCIN",
        "name": "Accelrys - Check In & Notifiy",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10174&avatarId=10131",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10174&avatarId=10131",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10174&avatarId=10131",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10174&avatarId=10131"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10142",
        "id": "10142",
        "key": "ACLEKB",
        "name": "Accelrys - EKB",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10142&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10142&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10142&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10142&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10061",
        "id": "10061",
        "key": "EXTJSPP",
        "name": "Accelrys - ExtJSPP",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10061&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10061&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10061&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10061&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10010",
            "id": "10010",
            "name": "Internal",
            "description": "Internal Projects"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10191",
        "id": "10191",
        "key": "ACLFRD",
        "name": "Accelrys - Fred",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10191&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10191&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10191&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10191&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10150",
        "id": "10150",
        "key": "ACLNSL",
        "name": "Accelrys - Notebook Script Library",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10150&avatarId=10122",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10150&avatarId=10122",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10150&avatarId=10122",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10150&avatarId=10122"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10010",
            "id": "10010",
            "name": "Internal",
            "description": "Internal Projects"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10230",
        "id": "10230",
        "key": "ACCLPDF",
        "name": "Accelrys - PDF Archival Report Generation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10230&avatarId=10009",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10230&avatarId=10009",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10230&avatarId=10009",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10230&avatarId=10009"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10060",
        "id": "10060",
        "key": "PPFV",
        "name": "Accelrys - PP Form Validation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10060&avatarId=10075",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10060&avatarId=10075",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10060&avatarId=10075",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10060&avatarId=10075"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10010",
            "id": "10010",
            "name": "Internal",
            "description": "Internal Projects"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10020",
        "id": "10020",
        "key": "JIR",
        "name": "Accelrys - PS JIRA",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10020&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10020&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10020&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10020&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10010",
            "id": "10010",
            "name": "Internal",
            "description": "Internal Projects"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10143",
        "id": "10143",
        "key": "ACLQW",
        "name": "Accelrys - QSAR Workbench",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10143&avatarId=10120",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10143&avatarId=10120",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10143&avatarId=10120",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10143&avatarId=10120"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10010",
            "id": "10010",
            "name": "Internal",
            "description": "Internal Projects"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10251",
        "id": "10251",
        "key": "ACLRPS",
        "name": "Accelrys - Script Replacement",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10251&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10251&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10251&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10251&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10788",
        "id": "10788",
        "key": "ACCLSS",
        "name": "Accelrys - Scripting Service",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10788&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10788&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10788&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10788&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10212",
        "id": "10212",
        "key": "ACCLPPIQELN",
        "name": "Accelrys - Vault Monitoring Dashboard Project",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10212&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10212&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10212&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10212&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12375",
        "id": "12375",
        "key": "ACCKGT",
        "name": "Accelrys-KenG-TEST",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12375&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12375&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12375&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12375&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10765",
        "id": "10765",
        "key": "INT1819",
        "name": "ACCELRYS: OPENAIR PROJECT REPORTING",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10765&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10765&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10765&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10765&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12669",
        "id": "12669",
        "key": "ADQ3226",
        "name": "Actavis Stability POC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12669&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12669&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12669&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12669&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13089",
        "id": "13089",
        "key": "BIOVIA6638",
        "name": "ACV1606 Stability Studies",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13089&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13089&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13089&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13089&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11660",
        "id": "11660",
        "key": "ATDP",
        "name": "Admin Training Demo Project",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11660&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11660&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11660&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11660&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13270",
        "id": "13270",
        "key": "DS6724",
        "name": "ADQ Projects: JIRA Examples",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13270&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13270&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13270&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13270&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10960",
        "id": "10960",
        "key": "SMSP",
        "name": "ADQM - Release Testing   ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10960&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10960&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10960&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10960&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10126",
        "id": "10126",
        "key": "AFFREG",
        "name": "Affymax - Registration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10126&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10126&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10126&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10126&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10163",
        "id": "10163",
        "key": "AGFMGN",
        "name": "AGFA - Migration from ISIS to Direct",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10163&avatarId=10137",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10163&avatarId=10137",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10163&avatarId=10137",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10163&avatarId=10137"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10032",
            "id": "10032",
            "name": "Other"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11560",
        "id": "11560",
        "key": "ADP",
        "name": "Agile Delivery Project",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11560&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11560&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11560&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11560&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10195",
        "id": "10195",
        "key": "AIDCSCR",
        "name": "AIDC PS - ScrumApp",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10195&avatarId=10008",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10195&avatarId=10008",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10195&avatarId=10008",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10195&avatarId=10008"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10010",
            "id": "10010",
            "name": "Internal",
            "description": "Internal Projects"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13293",
        "id": "13293",
        "key": "DS7029",
        "name": "Akzo Nobel Decorative Coatings B.V.: Notebook Phase1 Deployment Support",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13293&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13293&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13293&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13293&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12979",
        "id": "12979",
        "key": "BIOVIA6053",
        "name": "Akzo Nobel Decorative Paints: BIOVIA Notebook ON-PREMISE Pilot",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12979&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12979&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12979&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12979&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12666",
        "id": "12666",
        "key": "ALB5202",
        "name": "ALBEMARLE - EKB Support 2015",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12666&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12666&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12666&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12666&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10260",
        "id": "10260",
        "key": "ABLEKB",
        "name": "Albemarle EKB",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10260&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10260&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10260&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10260&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10241",
        "id": "10241",
        "key": "SLRUPG",
        "name": "Alere - SN6 Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10241&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10241&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10241&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10241&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10148",
        "id": "10148",
        "key": "ALXELN",
        "name": "Alexion – SN6 implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10148&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10148&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10148&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10148&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10065",
        "id": "10065",
        "key": "ALMCS",
        "name": "Almirall - Compound Store",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10065&avatarId=10078",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10065&avatarId=10078",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10065&avatarId=10078",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10065&avatarId=10078"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10779",
        "id": "10779",
        "key": "ELN2633",
        "name": "Almirall - Formulation Notebook",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10779&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10779&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10779&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10779&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12772",
        "id": "12772",
        "key": "ELN2209",
        "name": "Almirall Chemistry ELN",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12772&avatarId=11973",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12772&avatarId=11973",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12772&avatarId=11973",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12772&avatarId=11973"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13075",
        "id": "13075",
        "key": "BIOVIA6272",
        "name": "Amdipharm Mercury Company Limited: AMCO DMS Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13075&avatarId=12185",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13075&avatarId=12185",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13075&avatarId=12185",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13075&avatarId=12185"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12773",
        "id": "12773",
        "key": "AMGN5255",
        "name": "AMGEN - 2015 BioReg Consulting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12773&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12773&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12773&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12773&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12764",
        "id": "12764",
        "key": "AMGN5195",
        "name": "AMGEN - AML Building 6 Denosumab Hierarchy",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12764&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12764&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12764&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12764&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12873",
        "id": "12873",
        "key": "AMGN5501",
        "name": "AMGEN - ASM Hierarchy",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12873&avatarId=10880",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12873&avatarId=10880",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12873&avatarId=10880",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12873&avatarId=10880"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12866",
        "id": "12866",
        "key": "AMGN5620",
        "name": "AMGEN - CISPro Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12866&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12866&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12866&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12866&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12172",
        "id": "12172",
        "key": "AMGN3607",
        "name": "AMGEN - CMB Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12172&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12172&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12172&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12172&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12778",
        "id": "12778",
        "key": "AMGN5435",
        "name": "AMGEN HLEE Phase 1",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12778&avatarId=11880",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12778&avatarId=11880",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12778&avatarId=11880",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12778&avatarId=11880"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13065",
        "id": "13065",
        "key": "AMGNTCS",
        "name": "Amgen TCS HLEE",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13065&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13065&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13065&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13065&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10069",
        "id": "10069",
        "key": "AMGPP",
        "name": "Amgen – Peptide Mgt System",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10069&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10069&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10069&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10069&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12984",
        "id": "12984",
        "key": "BIOVIA6317",
        "name": "Amgen, Inc.: Amgen Reference Data Define and Design {Awaiting PO}",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12984&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12984&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12984&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12984&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13074",
        "id": "13074",
        "key": "BIOVIA6518",
        "name": "Amgen, Inc.: CRIS Phase 3 Hypercare",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13074&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13074&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13074&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13074&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13072",
        "id": "13072",
        "key": "BIOVIA6435",
        "name": "Amgen, Inc.: HLEE to EDL Data Transfer",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13072&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13072&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13072&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13072&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13061",
        "id": "13061",
        "key": "BIOVIA6224",
        "name": "Amgen, Inc.: POC for Holistic Lab to EDL",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13061&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13061&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13061&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13061&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13096",
        "id": "13096",
        "key": "DS6526",
        "name": "Amgen, Inc.: Seven New BioMAPS",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13096&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13096&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13096&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13096&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12366",
        "id": "12366",
        "key": "AMGN4094",
        "name": "AMGEN: Automated Daily Balance",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12366&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12366&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12366&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12366&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12876",
        "id": "12876",
        "key": "AMGN5623",
        "name": "AMGEN: ONYX to AMGN Migration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12876&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12876&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12876&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12876&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11766",
        "id": "11766",
        "key": "PLP3421",
        "name": "AMGN - BioReg POC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11766&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11766&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11766&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11766&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12667",
        "id": "12667",
        "key": "ELN4881",
        "name": "AN Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12667&avatarId=11875",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12667&avatarId=11875",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12667&avatarId=11875",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12667&avatarId=11875"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10570",
        "id": "10570",
        "key": "APTSML",
        "name": "Aptalis - SmartLab",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10570&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10570&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10570&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10570&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10032",
            "id": "10032",
            "name": "Other"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12567",
        "id": "12567",
        "key": "AZN4919",
        "name": "ASTRA ZENECA - 2014 Hierarchy Consulting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12567&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12567&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12567&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12567&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10193",
        "id": "10193",
        "key": "AZAQSUP",
        "name": "Astra Zeneca - Auto QSAR Support",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10193&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10193&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10193&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10193&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10063",
        "id": "10063",
        "key": "AZFTD",
        "name": "AstraZeneca - 43d Service Order",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10063&avatarId=10074",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10063&avatarId=10074",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10063&avatarId=10074",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10063&avatarId=10074"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12863",
        "id": "12863",
        "key": "INF4835",
        "name": "AstraZeneca - Chemistry Futures",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12863&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12863&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12863&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12863&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12865",
        "id": "12865",
        "key": "PLP5583",
        "name": "AstraZeneca - Draw Plugins",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12865&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12865&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12865&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12865&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10461",
        "id": "10461",
        "key": "AZDEPLOY",
        "name": "AstraZeneca - ELN 1",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10461&avatarId=11873",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10461&avatarId=11873",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10461&avatarId=11873",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10461&avatarId=11873"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10040",
        "id": "10040",
        "key": "AZSN",
        "name": "AstraZeneca - ELN 2",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10040&avatarId=11872",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10040&avatarId=11872",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10040&avatarId=11872",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10040&avatarId=11872"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12963",
        "id": "12963",
        "key": "ADQ5838",
        "name": "AstraZeneca - EMEA Discoverant Hierarchies",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12963&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12963&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12963&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12963&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10780",
        "id": "10780",
        "key": "ELN2164",
        "name": "AstraZeneca - LIMS/ELN2 Integration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10780&avatarId=11871",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10780&avatarId=11871",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10780&avatarId=11871",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10780&avatarId=11871"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13090",
        "id": "13090",
        "key": "DS5838A",
        "name": "AstraZeneca Pharmaceuticals LP: AZ 2015/16 European Hierarchies",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13090&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13090&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13090&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13090&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13278",
        "id": "13278",
        "key": "DS6915",
        "name": "AstraZeneca Pharmaceuticals LP: Mt. Vernon Training & Scoping Method Development",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13278&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13278&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13278&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13278&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13083",
        "id": "13083",
        "key": "BIOVIA6569",
        "name": "AstraZeneca UK Limited: Workbook:Update Import Results for Office 2013 & 2016",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13083&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13083&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13083&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13083&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10202",
        "id": "10202",
        "key": "ATMIPOC",
        "name": "ATMI - ELN POC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10202&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10202&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10202&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10202&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10235",
        "id": "10235",
        "key": "ATMIFRM",
        "name": "ATMI - Formulation Installation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10235&avatarId=10162",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10235&avatarId=10162",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10235&avatarId=10162",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10235&avatarId=10162"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11767",
        "id": "11767",
        "key": "EKB3280",
        "name": "AURORA - EKB Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11767&avatarId=10010",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11767&avatarId=10010",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11767&avatarId=10010",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11767&avatarId=10010"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13066",
        "id": "13066",
        "key": "TST12345",
        "name": "Auto-created by Rick Barnsley using CLI addon",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13066&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13066&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13066&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13066&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12668",
        "id": "12668",
        "key": "ADQ4872",
        "name": "AZ North Ryde EM",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12668&avatarId=11870",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12668&avatarId=11870",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12668&avatarId=11870",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12668&avatarId=11870"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12573",
        "id": "12573",
        "key": "ADQ4616",
        "name": "BAC140324 PLL",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12573&avatarId=10001",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12573&avatarId=10001",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12573&avatarId=10001",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12573&avatarId=10001"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10861",
        "id": "10861",
        "key": "PLP2306",
        "name": "Baxter: ICP Protocol",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10861&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10861&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10861&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10861&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12465",
        "id": "12465",
        "key": "PLP4002",
        "name": "Bayer - Catalyst Screening",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12465&avatarId=11576",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12465&avatarId=11576",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12465&avatarId=11576",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12465&avatarId=11576"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12475",
        "id": "12475",
        "key": "PLP4631",
        "name": "BAYER - CLJ Patent Drafter",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12475&avatarId=11583",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12475&avatarId=11583",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12475&avatarId=11583",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12475&avatarId=11583"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12374",
        "id": "12374",
        "key": "BKFS",
        "name": "Bayer Kogenate FS",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12374&avatarId=10009",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12374&avatarId=10009",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12374&avatarId=10009",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12374&avatarId=10009"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12961",
        "id": "12961",
        "key": "BAYER5546",
        "name": "BAYER: PDB Protocols",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12961&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12961&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12961&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12961&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10178",
        "id": "10178",
        "key": "BNRISR",
        "name": "Bend Research - Isentris Registration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10178&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10178&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10178&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10178&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11776",
        "id": "11776",
        "key": "2662",
        "name": "BESTCO - Rollout",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11776&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11776&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11776&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11776&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12663",
        "id": "12663",
        "key": "ELN5258",
        "name": "BHC FELD",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12663&avatarId=11770",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12663&avatarId=11770",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12663&avatarId=11770",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12663&avatarId=11770"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10050",
            "id": "10050",
            "name": "ADQM"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12377",
        "id": "12377",
        "key": "ADQ4330",
        "name": "BHC140219-01 FELD Blue Print Phase",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12377&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12377&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12377&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12377&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10050",
            "id": "10050",
            "name": "ADQM"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11360",
        "id": "11360",
        "key": "3359",
        "name": "BI - SureChemDirect PoC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11360&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11360&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11360&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11360&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10217",
        "id": "10217",
        "key": "BGNAEI",
        "name": "Biogen - AEI  Assay Data Loader",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10217&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10217&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10217&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10217&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10030",
            "id": "10030",
            "name": "Assay Explorer",
            "description": "An Assay Explorer project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10218",
        "id": "10218",
        "key": "BGNCR",
        "name": "BIOGEN - AEI TO CHEMREG ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10218&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10218&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10218&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10218&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10030",
            "id": "10030",
            "name": "Assay Explorer",
            "description": "An Assay Explorer project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10068",
        "id": "10068",
        "key": "BIOIS",
        "name": "Biogen - Cell Analysis",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10068&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10068&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10068&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10068&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13269",
        "id": "13269",
        "key": "DS6711",
        "name": "Biogen Inc: Biogen Patch Upgrade 2016",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13269&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13269&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13269&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13269&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12363",
        "id": "12363",
        "key": "BIIB4133",
        "name": "BIOGEN: ChemReg Datamart Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12363&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12363&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12363&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12363&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12969",
        "id": "12969",
        "key": "BIIB6071",
        "name": "BIOGEN: Scilligence ELN Integration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12969&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12969&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12969&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12969&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12467",
        "id": "12467",
        "key": "BMRN4335",
        "name": "BIOMARIN - 2014 Hierarchy Updates Consulting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12467&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12467&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12467&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12467&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12165",
        "id": "12165",
        "key": "ELN2700",
        "name": "BIOSYNTH - ELN Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12165&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12165&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12165&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12165&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12971",
        "id": "12971",
        "key": "BIOVIAMSDS",
        "name": "BIOVIA - MS/DS Training",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12971&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12971&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12971&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12971&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12872",
        "id": "12872",
        "key": "CAPTURE",
        "name": "BIOVIA - Next Generation LES & LIMS",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12872&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12872&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12872&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12872&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12960",
        "id": "12960",
        "key": "BIOVIA",
        "name": "BIOVIA: OA Reporting Tool",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12960&avatarId=12070",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12960&avatarId=12070",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12960&avatarId=12070",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12960&avatarId=12070"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10364",
        "id": "10364",
        "key": "BIRMAM",
        "name": "BIRMA Maintenance",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10364&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10364&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10364&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10364&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10122",
        "id": "10122",
        "key": "BMSBD",
        "name": "BMS - Ad Hoc Scripting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10122&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10122&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10122&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10122&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10080",
        "id": "10080",
        "key": "BMSAEW",
        "name": "BMS - AEW",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10080&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10080&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10080&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10080&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10165",
        "id": "10165",
        "key": "BMSBI",
        "name": "BMS - Balance Integration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10165&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10165&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10165&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10165&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12562",
        "id": "12562",
        "key": "BMS4409",
        "name": "BMS - BAS AELN Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12562&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12562&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12562&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12562&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12566",
        "id": "12566",
        "key": "BMS5161",
        "name": "BMS - BAS IM",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12566&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12566&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12566&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12566&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12560",
        "id": "12560",
        "key": "BMS5075",
        "name": "BMS - BD AELN Template Enhancements",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12560&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12560&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12560&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12560&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12481",
        "id": "12481",
        "key": "BMS4900",
        "name": "BMS - BIOREG Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12481&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12481&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12481&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12481&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12376",
        "id": "12376",
        "key": "BMS3785",
        "name": "BMS - BioReg Pilot",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12376&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12376&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12376&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12376&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12965",
        "id": "12965",
        "key": "BMS5970",
        "name": "BMS - BPD LES Phase 2",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12965&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12965&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12965&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12965&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11868",
        "id": "11868",
        "key": "3657",
        "name": "BMS - Dasa & Saxa",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11868&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11868&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11868&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11868&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10567",
        "id": "10567",
        "key": "BMSDEVLIMS",
        "name": "BMS - DevLIMS Integration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10567&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10567&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10567&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10567&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10778",
        "id": "10778",
        "key": "ELN2503",
        "name": "BMS - ELN Vet Sciences",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10778&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10778&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10778&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10778&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12474",
        "id": "12474",
        "key": "BMS4408",
        "name": "BMS - eLogBook",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12474&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12474&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12474&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12474&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10766",
        "id": "10766",
        "key": "BMSIM",
        "name": "BMS - Inventory Manager",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10766&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10766&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10766&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10766&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12661",
        "id": "12661",
        "key": "BMS5348",
        "name": "BMS - Knection BIOVIA Workbook Integration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12661&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12661&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12661&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12661&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12868",
        "id": "12868",
        "key": "BMS5441",
        "name": "BMS - LES Syracuse Methods",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12868&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12868&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12868&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12868&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12162",
        "id": "12162",
        "key": "BMSMS",
        "name": "BMS - Method Standardization",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12162&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12162&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12162&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12162&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10050",
            "id": "10050",
            "name": "ADQM"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10123",
        "id": "10123",
        "key": "BMSPI",
        "name": "BMS - PCRIS Integration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10123&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10123&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10123&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10123&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10566",
        "id": "10566",
        "key": "BMSPDLIMS",
        "name": "BMS - PDLIMS Results Entry",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10566&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10566&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10566&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10566&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10081",
        "id": "10081",
        "key": "BMSSS",
        "name": "BMS - Sample Submission",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10081&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10081&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10081&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10081&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12163",
        "id": "12163",
        "key": "PLP3799",
        "name": "BMS - SmartQuery",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12163&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12163&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12163&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12163&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11867",
        "id": "11867",
        "key": "31142",
        "name": "BMS - Syracuse Elo/Nivo",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11867&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11867&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11867&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11867&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11866",
        "id": "11866",
        "key": "3114",
        "name": "BMS - Syracuse Method Performance",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11866&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11866&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11866&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11866&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10460",
        "id": "10460",
        "key": "BMSSCR",
        "name": "BMS - Trace-Scribe",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10460&avatarId=10009",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10460&avatarId=10009",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10460&avatarId=10009",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10460&avatarId=10009"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10164",
        "id": "10164",
        "key": "BMSVMT",
        "name": "BMS - Vault Mining Tool",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10164&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10164&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10164&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10164&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10124",
        "id": "10124",
        "key": "BMSVI",
        "name": "BMS - VelQuest Integration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10124&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10124&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10124&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10124&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10102",
        "id": "10102",
        "key": "BMSAS",
        "name": "BMS – AELN Deployment",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10102&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10102&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10102&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10102&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12962",
        "id": "12962",
        "key": "BMS5943",
        "name": "BMS: BD Bioassay GXP Template Enhancements ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12962&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12962&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12962&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12962&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10266",
        "id": "10266",
        "key": "BIKDX",
        "name": "Boehringer Ingelheim - KARDEX Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10266&avatarId=10010",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10266&avatarId=10010",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10266&avatarId=10010",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10266&avatarId=10010"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12871",
        "id": "12871",
        "key": "ADQ5654",
        "name": "Bristol-Myers - LES deployment ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12871&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12871&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12871&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12871&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13272",
        "id": "13272",
        "key": "DS6912",
        "name": "Bristol-Myers Squibb Company: *Vet Science Template Enhancements",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13272&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13272&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13272&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13272&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13093",
        "id": "13093",
        "key": "DS6585",
        "name": "Bristol-Myers Squibb Company: BMS LES Phase 3",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13093&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13093&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13093&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13093&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13091",
        "id": "13091",
        "key": "DS6586",
        "name": "Bristol-Myers Squibb Company: BMS PEGA Sample Flow",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13091&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13091&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13091&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13091&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13064",
        "id": "13064",
        "key": "BIOVIA6217",
        "name": "Bristol-Myers Squibb Company: Sinequa Partner WB Install and Training",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13064&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13064&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13064&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13064&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10169",
        "id": "10169",
        "key": "BLISEN",
        "name": "Buckman Labs - Isentris Migration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10169&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10169&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10169&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10169&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12883",
        "id": "12883",
        "key": "CARB5824",
        "name": "CARBOGEN - SQL*LIMS Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12883&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12883&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12883&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12883&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12060",
        "id": "12060",
        "key": "CTED",
        "name": "Cephalon (Teva) ELN Deployment",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12060&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12060&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12060&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12060&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10145",
        "id": "10145",
        "key": "CEPHE",
        "name": "Cephalon - Hypotest Enhancements",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10145&avatarId=10121",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10145&avatarId=10121",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10145&avatarId=10121",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10145&avatarId=10121"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10569",
        "id": "10569",
        "key": "CRLGMPL",
        "name": "Charles River gmpLIMS",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10569&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10569&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10569&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10569&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13263",
        "id": "13263",
        "key": "DS6126",
        "name": "Chevron: CISPro Upgrade & Data Migration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13263&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13263&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13263&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13263&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12974",
        "id": "12974",
        "key": "CH5611",
        "name": "Christian Hansen: Notebook Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12974&avatarId=12172",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12974&avatarId=12172",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12974&avatarId=12172",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12974&avatarId=12172"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12768",
        "id": "12768",
        "key": "ISE4366",
        "name": "Clariant International AG Database Migration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12768&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12768&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12768&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12768&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12975",
        "id": "12975",
        "key": "RL6204",
        "name": "CML - SLA",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12975&avatarId=12076",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12975&avatarId=12076",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12975&avatarId=12076",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12975&avatarId=12076"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12968",
        "id": "12968",
        "key": "CL6113",
        "name": "COLGATE - AELN Phase 2",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12968&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12968&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12968&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12968&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10248",
        "id": "10248",
        "key": "COLWR",
        "name": "Colgate - WR/eLN",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10248&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10248&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10248&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10248&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10774",
        "id": "10774",
        "key": "COLLN",
        "name": "Colgate LabNet Replacement",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10774&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10774&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10774&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10774&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13092",
        "id": "13092",
        "key": "DS6482",
        "name": "Colgate Palmolive Company: Workbook and Work Request Enhancements",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13092&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13092&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13092&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13092&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10772",
        "id": "10772",
        "key": "2493",
        "name": "COLUMBIA UNIV - HT Informatics",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10772&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10772&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10772&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10772&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11769",
        "id": "11769",
        "key": "CID",
        "name": "Competitive Intelligence Dashboard",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11769&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11769&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11769&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11769&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12879",
        "id": "12879",
        "key": "ELN5655",
        "name": "COMPUGEN - NTBK Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12879&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12879&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12879&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12879&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11779",
        "id": "11779",
        "key": "CCC",
        "name": "Contur Component Collection",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11779&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11779&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11779&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11779&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10051",
            "id": "10051",
            "name": "Contur",
            "description": "Contur"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13281",
        "id": "13281",
        "key": "DS6947",
        "name": "Coty Inc.: COTY Hypersupport",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13281&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13281&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13281&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13281&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13264",
        "id": "13264",
        "key": "DS6666",
        "name": "Coty Inc.: Coty Notebook and CISPro Installations and Migrations",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13264&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13264&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13264&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13264&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12973",
        "id": "12973",
        "key": "CRC6189",
        "name": "CRC: Notebook Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12973&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12973&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12973&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12973&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12174",
        "id": "12174",
        "key": "CRL2983",
        "name": "CRL: LES",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12174&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12174&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12174&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12174&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10032",
            "id": "10032",
            "name": "Other"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10580",
        "id": "10580",
        "key": "CBSTBIO",
        "name": "Cubist - BioRails Workflows",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10580&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10580&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10580&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10580&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10032",
            "id": "10032",
            "name": "Other"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10052",
        "id": "10052",
        "key": "CIL",
        "name": "CycloFludic - Informatics Layer",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10052&avatarId=10001",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10052&avatarId=10001",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10052&avatarId=10001",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10052&avatarId=10001"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10865",
        "id": "10865",
        "key": "ADQM",
        "name": "DEBIO R.P.S.A Phase 1",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10865&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10865&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10865&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10865&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12880",
        "id": "12880",
        "key": "ELN5879",
        "name": "DECODE - NTBK Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12880&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12880&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12880&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12880&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12261",
        "id": "12261",
        "key": "DIC4162",
        "name": "DICERNA: BioReg Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12261&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12261&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12261&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12261&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10051",
        "id": "10051",
        "key": "DOM",
        "name": "Dompe - Fragmentation Rules",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10051&avatarId=10063",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10051&avatarId=10063",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10051&avatarId=10063",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10051&avatarId=10063"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11768",
        "id": "11768",
        "key": "ELN2614",
        "name": "DOMPE -ELN Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11768&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11768&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11768&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11768&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12862",
        "id": "12862",
        "key": "DOW5072",
        "name": "DOW AG - Flexible Consulting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12862&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12862&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12862&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12862&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10113",
        "id": "10113",
        "key": "DASBI",
        "name": "Dow Agrosciences - Biotest Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10113&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10113&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10113&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10113&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10030",
            "id": "10030",
            "name": "Assay Explorer",
            "description": "An Assay Explorer project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10179",
        "id": "10179",
        "key": "DASEKB",
        "name": "Dow Agrosciences - EKB",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10179&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10179&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10179&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10179&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10220",
        "id": "10220",
        "key": "DASEKBDD",
        "name": "Dow Agrosciences - EKB D&D",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10220&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10220&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10220&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10220&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10201",
        "id": "10201",
        "key": "DASISEN",
        "name": "Dow Agrosciences - Isentris",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10201&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10201&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10201&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10201&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10785",
        "id": "10785",
        "key": "CON2776",
        "name": "DOW CHEM - iLabber + PLP",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10785&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10785&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10785&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10785&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10051",
            "id": "10051",
            "name": "Contur",
            "description": "Contur"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10115",
        "id": "10115",
        "key": "DCHSD",
        "name": "Dow Chemical - Consulting on Demand",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10115&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10115&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10115&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10115&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10116",
        "id": "10116",
        "key": "DCOSD",
        "name": "Dow Corning - Consulting on Demand",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10116&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10116&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10116&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10116&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10031",
            "id": "10031",
            "name": "LEA"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10214",
        "id": "10214",
        "key": "DCTSM",
        "name": "Dow Corning - TDD to SiTE Migration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10214&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10214&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10214&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10214&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11764",
        "id": "11764",
        "key": "3360",
        "name": "DOWAG - MRFI Solutions Maintenance",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11764&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11764&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11764&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11764&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10210",
        "id": "10210",
        "key": "DDOCR",
        "name": "DuPont - Document Capture & Transcription",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10210&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10210&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10210&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10210&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13280",
        "id": "13280",
        "key": "DS6944",
        "name": "Duracell Inc.: Notebook Data Extraction",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13280&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13280&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13280&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13280&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13284",
        "id": "13284",
        "key": "DS5756",
        "name": "EirGen Pharma: QUMAS: LMS Services - 2014.12.09.733",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13284&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13284&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13284&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13284&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10783",
        "id": "10783",
        "key": "ELN2310",
        "name": "ELANCO Animal Health - Chemistry ELN",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10783&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10783&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10783&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10783&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11780",
        "id": "11780",
        "key": "ELN3004",
        "name": "ELANCO Animal Health - PLL ELN Maintenance and Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11780&avatarId=10875",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11780&avatarId=10875",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11780&avatarId=10875",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11780&avatarId=10875"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13087",
        "id": "13087",
        "key": "BIOVIA6595",
        "name": "Elanco: Paperless Lab ELN Upgrade 2016",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13087&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13087&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13087&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13087&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12664",
        "id": "12664",
        "key": "LLY5390",
        "name": "ELI LILLY - SOW50  - Consulting Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12664&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12664&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12664&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12664&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13076",
        "id": "13076",
        "key": "BIOVIA6140",
        "name": "Eli Lilly and Company: BioReg 4.2 Pre-Upgrade CO1",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13076&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13076&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13076&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13076&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13165",
        "id": "13165",
        "key": "DS6626",
        "name": "Eli Lilly and Company: Cambridge Semantics Partner WB Install and Training CO2",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13165&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13165&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13165&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13165&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12564",
        "id": "12564",
        "key": "XOM4707",
        "name": "EXXON - DELMIA & AEP Integration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12564&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12564&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12564&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12564&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10236",
        "id": "10236",
        "key": "XOMDM",
        "name": "ExxonMobil - Data Management",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10236&avatarId=10163",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10236&avatarId=10163",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10236&avatarId=10163",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10236&avatarId=10163"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12665",
        "id": "12665",
        "key": "XOM5324",
        "name": "EXXONMOBIL - Notebook Phase 2",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12665&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12665&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12665&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12665&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13071",
        "id": "13071",
        "key": "BIOVIA6215",
        "name": "EXXONMOBIL CORPORATION: 2016 Infrastructure Pilot",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13071&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13071&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13071&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13071&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13289",
        "id": "13289",
        "key": "DS6674",
        "name": "F. Hoffmann-La Roche AG: ELA2 Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13289&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13289&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13289&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13289&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12864",
        "id": "12864",
        "key": "ELN5368",
        "name": "Ferring ELN",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12864&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12864&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12864&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12864&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13288",
        "id": "13288",
        "key": "DS6718",
        "name": "Ferring Holding SA: Ferring - Q Real Migration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13288&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13288&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13288&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13288&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12776",
        "id": "12776",
        "key": "ADQ5199",
        "name": "Ferring LES POC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12776&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12776&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12776&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12776&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10786",
        "id": "10786",
        "key": "1626",
        "name": "FIRMENICH - HTS Image Analysis",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10786&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10786&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10786&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10786&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12867",
        "id": "12867",
        "key": "ADQ5629",
        "name": "Forrest Laboratories Ireland Ltd - LES instrument services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12867&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12867&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12867&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12867&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10862",
        "id": "10862",
        "key": "3036",
        "name": "GBT - Assay Data Loader and SAR View",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10862&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10862&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10862&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10862&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10574",
        "id": "10574",
        "key": "GHTPS",
        "name": "Genecor - High Throughput Protein Screening",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10574&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10574&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10574&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10574&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10103",
        "id": "10103",
        "key": "GBHOPS",
        "name": "Genentech - BHOPS",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10103&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10103&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10103&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10103&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10082",
        "id": "10082",
        "key": "GCPDF",
        "name": "Genentech - Concatenated PDF",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10082&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10082&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10082&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10082&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10867",
        "id": "10867",
        "key": "ELN2987",
        "name": "GENENTECH - ELN Analytical POC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10867&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10867&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10867&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10867&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11261",
        "id": "11261",
        "key": "3202",
        "name": "GENENTECH - ELN Support",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11261&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11261&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11261&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11261&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10211",
        "id": "10211",
        "key": "GSRLR",
        "name": "Genentech - Structure Resolver, Compliance Report, and Import from Experiment",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10211&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10211&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10211&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10211&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13261",
        "id": "13261",
        "key": "DS6653",
        "name": "Genentech, Inc: Workbook Application Support CO1",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13261&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13261&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13261&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13261&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12967",
        "id": "12967",
        "key": "GNE5256",
        "name": "GENENTECH: Discoverant CCP2 MPA Hierarchy",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12967&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12967&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12967&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12967&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12369",
        "id": "12369",
        "key": "GDAP",
        "name": "Generic Discoverant Agile Project",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12369&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12369&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12369&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12369&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12373",
        "id": "12373",
        "key": "GDTP",
        "name": "Generic Discoverant Tracking Project",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12373&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12373&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12373&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12373&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12982",
        "id": "12982",
        "key": "BIOVIA5650",
        "name": "Genomics England: LSR: Genomics England Pipeline Pilot Expansion",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12982&avatarId=10879",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12982&avatarId=10879",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12982&avatarId=10879",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12982&avatarId=10879"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12378",
        "id": "12378",
        "key": "GILD4449",
        "name": "GILEAD - AELN",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12378&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12378&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12378&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12378&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10782",
        "id": "10782",
        "key": "CON2515",
        "name": "GILEAD - Contur + PLP",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10782&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10782&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10782&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10782&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10051",
            "id": "10051",
            "name": "Contur",
            "description": "Contur"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12379",
        "id": "12379",
        "key": "GILD4279",
        "name": "GILEAD - LES",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12379&avatarId=10009",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12379&avatarId=10009",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12379&avatarId=10009",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12379&avatarId=10009"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13275",
        "id": "13275",
        "key": "DS6809",
        "name": "Gilead Pharmaceuticals: Discoverant Phase I",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13275&avatarId=10876",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13275&avatarId=10876",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13275&avatarId=10876",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13275&avatarId=10876"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12766",
        "id": "12766",
        "key": "GSK5173",
        "name": "GLAXOSMITHKLINE - AEP Proteomics ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12766&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12766&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12766&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12766&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13286",
        "id": "13286",
        "key": "DS6927",
        "name": "GlaxoSmithKline Medicines Research Centre: BioReg Upgrade 3.1 to 2017",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13286&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13286&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13286&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13286&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12767",
        "id": "12767",
        "key": "DIR4185",
        "name": "Gruenenthal Direct Migration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12767&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12767&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12767&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12767&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11860",
        "id": "11860",
        "key": "ELN3425",
        "name": "Grünenthal - ELN & ChemReg",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11860&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11860&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11860&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11860&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10100",
        "id": "10100",
        "key": "GRTM",
        "name": "Grünenthal - Maintenance",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10100&avatarId=10091",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10100&avatarId=10091",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10100&avatarId=10091",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10100&avatarId=10091"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10050",
        "id": "10050",
        "key": "GRT",
        "name": "Grünenthal - Service Days 2011",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10050&avatarId=10093",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10050&avatarId=10093",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10050&avatarId=10093",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10050&avatarId=10093"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11863",
        "id": "11863",
        "key": "OTH3593",
        "name": "GSK - BioReg",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11863&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11863&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11863&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11863&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10144",
        "id": "10144",
        "key": "GSKQW",
        "name": "GSK - QSAR Workbench",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10144&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10144&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10144&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10144&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13080",
        "id": "13080",
        "key": "BIOVIA6248",
        "name": "GW Pharmaceuticals Plc: BIOVIA Workbook Implementation & Deployment",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13080&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13080&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13080&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13080&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12262",
        "id": "12262",
        "key": "SNN3056",
        "name": "HEALTHPOINT: LES/EBR Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12262&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12262&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12262&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12262&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10362",
        "id": "10362",
        "key": "HGSAB",
        "name": "HGS - AB Screening",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10362&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10362&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10362&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10362&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11762",
        "id": "11762",
        "key": "ADQ3213",
        "name": "HOLOPACK - EM",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11762&avatarId=11071",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11762&avatarId=11071",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11762&avatarId=11071",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11762&avatarId=11071"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10050",
            "id": "10050",
            "name": "ADQM"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13079",
        "id": "13079",
        "key": "BIOVIA6567",
        "name": "Horizon Discovery Ltd: QUMAS ComplianceSP Quality Solution Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13079&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13079&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13079&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13079&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10240",
        "id": "10240",
        "key": "HOSBAL",
        "name": "Hospira - Balance Calibration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10240&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10240&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10240&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10240&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10090",
        "id": "10090",
        "key": "HOSELN",
        "name": "Hospira - General Scripting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10090&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10090&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10090&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10090&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10213",
        "id": "10213",
        "key": "HSPPRT",
        "name": "Hospira – Print Report Activity",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10213&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10213&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10213&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10213&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12777",
        "id": "12777",
        "key": "ADQ5140",
        "name": "Hovione EBR",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12777&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12777&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12777&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12777&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13290",
        "id": "13290",
        "key": "DS5496",
        "name": "HUB Requirements",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13290&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13290&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13290&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13290&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12160",
        "id": "12160",
        "key": "IDE",
        "name": "Idenix Bioanalytical ELN Deployment",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12160&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12160&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12160&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12160&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10366",
        "id": "10366",
        "key": "IDNXELN",
        "name": "Idenix ELN Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10366&avatarId=10372",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10366&avatarId=10372",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10366&avatarId=10372",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10366&avatarId=10372"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10789",
        "id": "10789",
        "key": "IDXLOGI",
        "name": "Idenix Pharma -  Logistics Implementation   ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10789&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10789&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10789&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10789&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10032",
            "id": "10032",
            "name": "Other"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10768",
        "id": "10768",
        "key": "PLP2473",
        "name": "IMI - EUC2LID ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10768&avatarId=11073",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10768&avatarId=11073",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10768&avatarId=11073",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10768&avatarId=11073"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10233",
        "id": "10233",
        "key": "IRLHZ",
        "name": "Industrial Research Ltd - Hazop",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10233&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10233&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10233&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10233&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10166",
        "id": "10166",
        "key": "IRLELN",
        "name": "Industrial Research Ltd - Migration from CS ELN to SN6",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10166&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10166&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10166&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10166&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13084",
        "id": "13084",
        "key": "IPET",
        "name": "Internal PS Estimation Tool",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13084&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13084&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13084&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13084&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12372",
        "id": "12372",
        "key": "INS4025",
        "name": "Inventiva - Migration to Insight",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12372&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12372&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12372&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12372&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12473",
        "id": "12473",
        "key": "OTH4696",
        "name": "IPSEN - Logistics Upgrade to 1,4",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12473&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12473&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12473&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12473&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13160",
        "id": "13160",
        "key": "UNIFY5D",
        "name": "IPSEN-UNIFY5D",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13160&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13160&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13160&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13160&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10232",
        "id": "10232",
        "key": "IQNB",
        "name": "IQ Testing for NB",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10232&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10232&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10232&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10232&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12173",
        "id": "12173",
        "key": "CON3397",
        "name": "ISISPHARMA",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12173&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12173&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12173&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12173&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10051",
            "id": "10051",
            "name": "Contur",
            "description": "Contur"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12662",
        "id": "12662",
        "key": "JNJ5365",
        "name": "JANSSEN - External Data Extraction POC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12662&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12662&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12662&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12662&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11060",
        "id": "11060",
        "key": "WSU",
        "name": "Janssen - WebServices Update",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11060&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11060&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11060&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11060&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13162",
        "id": "13162",
        "key": "DS6669",
        "name": "Janssen Pharma (GPSG): LES Implementation 2016",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13162&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13162&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13162&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13162&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13166",
        "id": "13166",
        "key": "DS6733",
        "name": "Janssen Research & Development, a division of Janssen Pharmaceutica N.V: JNJ LES",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13166&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13166&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13166&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13166&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13095",
        "id": "13095",
        "key": "DS6236",
        "name": "Janssen Research & Development, L.L.C.: Enhancement of IDS/PI Interface",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13095&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13095&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13095&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13095&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13085",
        "id": "13085",
        "key": "BIOVIA6520",
        "name": "Janssen Research & Development, L.L.C.: Janssen Support and eRex Report Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13085&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13085&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13085&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13085&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13273",
        "id": "13273",
        "key": "DS6690",
        "name": "Janssen Research & Development, L.L.C.: JNJ Word Reporting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13273&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13273&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13273&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13273&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12981",
        "id": "12981",
        "key": "BIOVIA6208",
        "name": "Janssen Research & Development, L.L.C.: PP Reporting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12981&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12981&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12981&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12981&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13094",
        "id": "13094",
        "key": "DS6434",
        "name": "Janssen Research & Development, LLC: 2016 Operational Support",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13094&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13094&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13094&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13094&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10197",
        "id": "10197",
        "key": "JAZZINT",
        "name": "JAZZ Pharma - Concur Integration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10197&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10197&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10197&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10197&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11561",
        "id": "11561",
        "key": "JIRA6",
        "name": "Jira 6 Issues",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11561&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11561&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11561&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11561&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13363",
        "id": "13363",
        "key": "JUZT",
        "name": "JIRA Upgrade and Zephyr Test",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?avatarId=12494",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&avatarId=12494",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&avatarId=12494",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&avatarId=12494"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13560",
        "id": "13560",
        "key": "JUPT",
        "name": "JIRA Upgrade project test",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?avatarId=12494",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&avatarId=12494",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&avatarId=12494",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&avatarId=12494"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12061",
        "id": "12061",
        "key": "JOL",
        "name": "JJ OCD LES",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12061&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12061&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12061&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12061&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10050",
            "id": "10050",
            "name": "ADQM"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10371",
        "id": "10371",
        "key": "JMEPU",
        "name": "JM-Enhanced Preparation Unit",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10371&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10371&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10371&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10371&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10372",
        "id": "10372",
        "key": "JMHT",
        "name": "JM-High Throughput",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10372&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10372&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10372&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10372&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12476",
        "id": "12476",
        "key": "JNJ4923",
        "name": "JNJ - 2014 Recipe Editor CO1",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12476&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12476&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12476&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12476&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10791",
        "id": "10791",
        "key": "ELN2747",
        "name": "JnJ - ADME 2013 Support",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10791&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10791&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10791&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10791&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12874",
        "id": "12874",
        "key": "JNJ5690",
        "name": "JNJ - AELN PLP Reporting Tool PoC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12874&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12874&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12874&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12874&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10117",
        "id": "10117",
        "key": "JNJAT",
        "name": "JnJ - Audit Trail Searching",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10117&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10117&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10117&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10117&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10199",
        "id": "10199",
        "key": "JNJBIO",
        "name": "JnJ - Bioanalytical Reporting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10199&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10199&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10199&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10199&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10961",
        "id": "10961",
        "key": "JNJCSE",
        "name": "JnJ - Customer Search Extensions",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10961&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10961&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10961&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10961&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10769",
        "id": "10769",
        "key": "JNTDYTMP",
        "name": "JnJ - Document Template Management",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10769&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10769&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10769&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10769&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12380",
        "id": "12380",
        "key": "JNJ4608",
        "name": "JNJ - Dynamic Template Manager",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12380&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12380&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12380&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12380&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10071",
        "id": "10071",
        "key": "JNJGS",
        "name": "JnJ - ELN General Scripting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10071&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10071&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10071&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10071&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10121",
        "id": "10121",
        "key": "JNJGCRSM",
        "name": "JnJ - GCRS 2010 Maintenance ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10121&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10121&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10121&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10121&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10032",
            "id": "10032",
            "name": "Other"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10120",
        "id": "10120",
        "key": "JNJGCRSU",
        "name": "JnJ - GCRS CCC Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10120&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10120&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10120&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10120&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10032",
            "id": "10032",
            "name": "Other"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12381",
        "id": "12381",
        "key": "JNJ4562",
        "name": "JNJ - Hamilton POC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12381&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12381&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12381&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12381&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10130",
        "id": "10130",
        "key": "JNJIR",
        "name": "JnJ - Isentris Reports",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10130&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10130&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10130&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10130&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10200",
        "id": "10200",
        "key": "JNJLRE",
        "name": "JnJ - Lightweight Recipe Execution",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10200&avatarId=10008",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10200&avatarId=10008",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10200&avatarId=10008",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10200&avatarId=10008"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10365",
        "id": "10365",
        "key": "JNJELN",
        "name": "JNJ - Operational Support",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10365&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10365&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10365&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10365&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10564",
        "id": "10564",
        "key": "JNJPI",
        "name": "JNJ - PI Batch Reports",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10564&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10564&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10564&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10564&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10167",
        "id": "10167",
        "key": "JNJDEVCO",
        "name": "JnJ - Unity/DevCo",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10167&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10167&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10167&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10167&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10563",
        "id": "10563",
        "key": "JNJIDS",
        "name": "JNJ - VelQuest IDS",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10563&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10563&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10563&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10563&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10573",
        "id": "10573",
        "key": "JJELNBA",
        "name": "JnJ ELN BioAnalytical Deployment",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10573&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10573&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10573&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10573&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10463",
        "id": "10463",
        "key": "JJGCRS",
        "name": "JnJ GCRS 2012 Maintenance",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10463&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10463&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10463&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10463&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10464",
        "id": "10464",
        "key": "JJSTEREOUP",
        "name": "JnJ Stereochemistry Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10464&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10464&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10464&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10464&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12365",
        "id": "12365",
        "key": "JNJ3796",
        "name": "JNJ: LabVantage LIMS Interface",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12365&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12365&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12365&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12365&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10062",
        "id": "10062",
        "key": "JMEFM",
        "name": "Johnson Matthey - EF Migration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10062&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10062&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10062&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10062&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10864",
        "id": "10864",
        "key": "EKB2014",
        "name": "Johnson Matthey - EKB Enhancements 39 days",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10864&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10864&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10864&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10864&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10863",
        "id": "10863",
        "key": "EKB2017",
        "name": "Johnson Matthey - EKB FT Part 2 32 Days",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10863&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10863&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10863&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10863&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10577",
        "id": "10577",
        "key": "JMEKBSM",
        "name": "Johnson Matthey - EKB Support and Maintenance",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10577&avatarId=10575",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10577&avatarId=10575",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10577&avatarId=10575",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10577&avatarId=10575"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10578",
        "id": "10578",
        "key": "JMEKBTRAIN",
        "name": "Johnson Matthey - EKB Training",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10578&avatarId=10010",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10578&avatarId=10010",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10578&avatarId=10010",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10578&avatarId=10010"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13265",
        "id": "13265",
        "key": "DS6779",
        "name": "Karolinska Institutet: Notebook Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13265&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13265&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13265&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13265&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10572",
        "id": "10572",
        "key": "LNELN",
        "name": "Laila Nutra - ELN",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10572&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10572&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10572&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10572&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10239",
        "id": "10239",
        "key": "LANELN",
        "name": "Lancaster - 5280",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10239&avatarId=11476",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10239&avatarId=11476",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10239&avatarId=11476",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10239&avatarId=11476"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10132",
        "id": "10132",
        "key": "LEOELNP",
        "name": "LEO - SN6 Pilot",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10132&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10132&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10132&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10132&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10222",
        "id": "10222",
        "key": "LEOELN",
        "name": "LEO Pharma ELN",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10222&avatarId=10675",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10222&avatarId=10675",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10222&avatarId=10675",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10222&avatarId=10675"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10361",
        "id": "10361",
        "key": "LEOPTOOL",
        "name": "LEO Planning Tool",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10361&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10361&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10361&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10361&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10127",
        "id": "10127",
        "key": "LGCIN",
        "name": "LGC – Isentris and Notebook",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10127&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10127&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10127&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10127&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11781",
        "id": "11781",
        "key": "ADQ3537",
        "name": "Lifescan - EXIMO Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11781&avatarId=11076",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11781&avatarId=11076",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11781&avatarId=11076",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11781&avatarId=11076"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10050",
            "id": "10050",
            "name": "ADQM"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12978",
        "id": "12978",
        "key": "BIOVIA6148",
        "name": "LifeScan Scotland Ltd: LIF-Eximo Phase II CO 6",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12978&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12978&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12978&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12978&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10263",
        "id": "10263",
        "key": "LLYAMR",
        "name": "Lilly - Advanced Multi-Step Reporting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10263&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10263&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10263&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10263&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10860",
        "id": "10860",
        "key": "OTH2961",
        "name": "Lilly - BioReg Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10860&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10860&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10860&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10860&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10032",
            "id": "10032",
            "name": "Other"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10568",
        "id": "10568",
        "key": "LLYCRV",
        "name": "Lilly - Crave",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10568&avatarId=10573",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10568&avatarId=10573",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10568&avatarId=10573",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10568&avatarId=10573"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10761",
        "id": "10761",
        "key": "LLYPS",
        "name": "Lilly - eLN Powershell Script",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10761&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10761&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10761&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10761&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10264",
        "id": "10264",
        "key": "LLYGC",
        "name": "Lilly - Green Chemistry",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10264&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10264&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10264&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10264&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10265",
        "id": "10265",
        "key": "LLYRO",
        "name": "Lilly - Reaction Optimization",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10265&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10265&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10265&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10265&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10462",
        "id": "10462",
        "key": "LLEEX",
        "name": "Lilly File Extraction from Symyx Notebook",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10462&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10462&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10462&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10462&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13073",
        "id": "13073",
        "key": "BIOVIA6495",
        "name": "Lonza AG: Workbook R&T Stage B Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13073&avatarId=12182",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13073&avatarId=12182",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13073&avatarId=12182",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13073&avatarId=12182"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12761",
        "id": "12761",
        "key": "ELN5090",
        "name": "Lonza R&T ELN - Stage A",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12761&avatarId=11876",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12761&avatarId=11876",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12761&avatarId=11876",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12761&avatarId=11876"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13260",
        "id": "13260",
        "key": "DS6640",
        "name": "Lupin Limited: Analytical Base Deployment",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13260&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13260&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13260&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13260&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13277",
        "id": "13277",
        "key": "DS6571",
        "name": "Mallinckrodt Pharmaceuticals: Mallinckrodt St Louis LES/LIMS",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13277&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13277&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13277&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13277&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10101",
        "id": "10101",
        "key": "MOCAT",
        "name": "Manchester Organics - Catalog Editor Maintenance",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10101&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10101&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10101&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10101&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13088",
        "id": "13088",
        "key": "BIOVIA5996",
        "name": "Manchester Organics: Isentris Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13088&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13088&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13088&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13088&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13285",
        "id": "13285",
        "key": "DS6946",
        "name": "Medimmune, LLC: Workbook for Frederick Services CO1",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13285&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13285&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13285&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13285&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12368",
        "id": "12368",
        "key": "MED4269",
        "name": "MEDIMMUNE: AELN Installation & Rollout",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12368&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12368&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12368&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12368&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12765",
        "id": "12765",
        "key": "RIBX4850",
        "name": "MELINTA - AE-CR Insight Pilot",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12765&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12765&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12765&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12765&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10777",
        "id": "10777",
        "key": "ALDAS",
        "name": "MERCK - ALDaS",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10777&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10777&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10777&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10777&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11782",
        "id": "11782",
        "key": "SUP3628",
        "name": "MERCK - ALDAS Support",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11782&avatarId=10871",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11782&avatarId=10871",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11782&avatarId=10871",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11782&avatarId=10871"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12470",
        "id": "12470",
        "key": "MRK4650",
        "name": "MERCK - ALDAS V2",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12470&avatarId=10877",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12470&avatarId=10877",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12470&avatarId=10877",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12470&avatarId=10877"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10243",
        "id": "10243",
        "key": "MRKASAP",
        "name": "Merck - ASAP",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10243&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10243&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10243&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10243&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11262",
        "id": "11262",
        "key": "3041",
        "name": "MERCK - BioReg 3.1 & CMB",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11262&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11262&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11262&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11262&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10565",
        "id": "10565",
        "key": "MRKBIO",
        "name": "Merck - BioReg New Entities",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10565&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10565&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10565&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10565&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11771",
        "id": "11771",
        "key": "1545",
        "name": "MERCK - LEA Custom Apps",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11771&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11771&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11771&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11771&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12565",
        "id": "12565",
        "key": "MRK4337",
        "name": "MERCK - LEA Integration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12565&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12565&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12565&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12565&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10151",
        "id": "10151",
        "key": "MMSWB",
        "name": "Merck - M&S Workbench",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10151&avatarId=10123",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10151&avatarId=10123",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10151&avatarId=10123",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10151&avatarId=10123"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12472",
        "id": "12472",
        "key": "EKB4543",
        "name": "MERCK - OLED (Mikado)",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12472&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12472&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12472&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12472&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10162",
        "id": "10162",
        "key": "MRKPE",
        "name": "Merck - Protocol Enhancements",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10162&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10162&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10162&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10162&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10363",
        "id": "10363",
        "key": "MRKEKB",
        "name": "Merck - Purification ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10363&avatarId=11477",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10363&avatarId=11477",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10363&avatarId=11477",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10363&avatarId=11477"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12660",
        "id": "12660",
        "key": "MRKEXT3628",
        "name": "MERCK - Purification Support",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12660&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12660&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12660&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12660&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11770",
        "id": "11770",
        "key": "MRK3440",
        "name": "MERCK - QSAR Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11770&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11770&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11770&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11770&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11777",
        "id": "11777",
        "key": "MRK2951",
        "name": "MERCK - QSAR TO#1",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11777&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11777&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11777&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11777&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10190",
        "id": "10190",
        "key": "MKSISC",
        "name": "Merck Serono - Isentris Consulting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10190&avatarId=10140",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10190&avatarId=10140",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10190&avatarId=10140",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10190&avatarId=10140"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13082",
        "id": "13082",
        "key": "BIOVIA6610",
        "name": "Merck Serono S.A.: Vevey Discoverant Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13082&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13082&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13082&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13082&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12361",
        "id": "12361",
        "key": "MRK3747",
        "name": "MERCK SERONO: Martillac Microbial Hierarchy",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12361&avatarId=11473",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12361&avatarId=11473",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12361&avatarId=11473",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12361&avatarId=11473"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13063",
        "id": "13063",
        "key": "BIOVIA6321",
        "name": "Merck Sharp & Dohme Corp: 3DEXPERIENCE Platform Implementation Assessment",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13063&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13063&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13063&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13063&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13282",
        "id": "13282",
        "key": "DS6804",
        "name": "Merck Sharp & Dohme Corp: PEMS Implementation Phase 2 & BioPLM Deployment",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13282&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13282&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13282&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13282&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12260",
        "id": "12260",
        "key": "MRK4121",
        "name": "MERCK: AUTO QSAR TO1",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12260&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12260&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12260&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12260&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12760",
        "id": "12760",
        "key": "MACK4342",
        "name": "MERRIMACK - ELN PDF Migration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12760&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12760&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12760&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12760&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12885",
        "id": "12885",
        "key": "MPI5436",
        "name": "MILLENIUM AELN-PLP Reporting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12885&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12885&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12885&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12885&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12561",
        "id": "12561",
        "key": "MPI4903",
        "name": "MILLENNIUM - AELN 6.9 Install (CMCC)",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12561&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12561&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12561&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12561&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12568",
        "id": "12568",
        "key": "MPI4904",
        "name": "MILLENNIUM - AELN CMCC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12568&avatarId=11672",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12568&avatarId=11672",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12568&avatarId=11672",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12568&avatarId=11672"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10249",
        "id": "10249",
        "key": "MPIELN",
        "name": "Millennium Pharma - ELN Nested Tables",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10249&avatarId=10164",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10249&avatarId=10164",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10249&avatarId=10164",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10249&avatarId=10164"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10762",
        "id": "10762",
        "key": "CHEM2221",
        "name": "MILLENNIUM: CHEM PLATFORM UPGRADE",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10762&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10762&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10762&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10762&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10776",
        "id": "10776",
        "key": "CON2624",
        "name": "Minnesota - Forensic Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10776&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10776&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10776&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10776&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10051",
            "id": "10051",
            "name": "Contur",
            "description": "Contur"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10198",
        "id": "10198",
        "key": "MONSML",
        "name": "Monsanto - MSL Reporting",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10198&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10198&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10198&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10198&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10562",
        "id": "10562",
        "key": "MONPLP",
        "name": "Monsanto - PLP Projects",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10562&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10562&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10562&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10562&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11870",
        "id": "11870",
        "key": "2567",
        "name": "MONSANTO - Reporting Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11870&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11870&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11870&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11870&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10763",
        "id": "10763",
        "key": "PLP1917",
        "name": "MONSANTO: IMAGING SERVICES",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10763&avatarId=10008",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10763&avatarId=10008",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10763&avatarId=10008",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10763&avatarId=10008"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12469",
        "id": "12469",
        "key": "MLNM2604",
        "name": "MPI - BioReg Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12469&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12469&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12469&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12469&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13078",
        "id": "13078",
        "key": "BIOVIA6161",
        "name": "MRC Technology: MRCT Workbook Deployment",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13078&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13078&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13078&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13078&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10771",
        "id": "10771",
        "key": "2494",
        "name": "MT SINAI - HT Informatics",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10771&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10771&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10771&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10771&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10775",
        "id": "10775",
        "key": "2861",
        "name": "MYOKARDIA - HT Informatics",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10775&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10775&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10775&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10775&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11960",
        "id": "11960",
        "key": "ADQ3710",
        "name": "NAH-SLA LIMS",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11960&avatarId=11271",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11960&avatarId=11271",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11960&avatarId=11271",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11960&avatarId=11271"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10050",
            "id": "10050",
            "name": "ADQM"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10149",
        "id": "10149",
        "key": "NCIDB",
        "name": "NCI - MRTB Enhancements",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10149&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10149&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10149&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10149&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10767",
        "id": "10767",
        "key": "NEXGEN1",
        "name": "NexGen - Phase 1",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10767&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10767&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10767&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10767&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10173",
        "id": "10173",
        "key": "NVSELN",
        "name": "Novartis - ELN Sandbox",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10173&avatarId=10133",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10173&avatarId=10133",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10173&avatarId=10133",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10173&avatarId=10133"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10223",
        "id": "10223",
        "key": "NAHELN",
        "name": "Novartis Animal Health ELN [Completed]",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10223&avatarId=10150",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10223&avatarId=10150",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10223&avatarId=10150",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10223&avatarId=10150"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10221",
        "id": "10221",
        "key": "NVOLEA",
        "name": "Novo Nordisk LEA to NNCD Integration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10221&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10221&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10221&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10221&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10031",
            "id": "10031",
            "name": "LEA"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10576",
        "id": "10576",
        "key": "NNSNB",
        "name": "Novo Nordisk NNCD SnB & NNStock",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10576&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10576&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10576&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10576&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10660",
        "id": "10660",
        "key": "ONXXELN",
        "name": "Onyx - AELN Deployment",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10660&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10660&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10660&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10660&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11460",
        "id": "11460",
        "key": "ONYX",
        "name": "Onyx - Notebook Deployment",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11460&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11460&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11460&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11460&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11773",
        "id": "11773",
        "key": "9999",
        "name": "OPENAIR - TEST",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11773&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11773&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11773&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11773&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10575",
        "id": "10575",
        "key": "OQNB",
        "name": "OQ for NB ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10575&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10575&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10575&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10575&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10370",
        "id": "10370",
        "key": "ORILNP",
        "name": "Oril ELN Notebook Prototypes",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10370&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10370&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10370&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10370&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13283",
        "id": "13283",
        "key": "DS6596",
        "name": "Oril Industrie: SRV1605 NEO Migration Support",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13283&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13283&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13283&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13283&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10242",
        "id": "10242",
        "key": "OSIDN",
        "name": "OSI - DN Migration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10242&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10242&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10242&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10242&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10172",
        "id": "10172",
        "key": "OSIISEN",
        "name": "OSI - Isentris Support",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10172&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10172&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10172&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10171",
        "id": "10171",
        "key": "OSISN",
        "name": "OSI - SN Support",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10171&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10171&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10171&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10171&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10252",
        "id": "10252",
        "key": "OSIWFLW",
        "name": "OSI - Workflow",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10252&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10252&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10252&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10252&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12877",
        "id": "12877",
        "key": "PCRX5164",
        "name": "PACIRA PHARMA - Discoverant SoCal",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12877&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12877&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12877&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12877&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10111",
        "id": "10111",
        "key": "PNGAES",
        "name": "PandG - AE Enhancements",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10111&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10111&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10111&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10111&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10030",
            "id": "10030",
            "name": "Assay Explorer",
            "description": "An Assay Explorer project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11774",
        "id": "11774",
        "key": "EKB3055",
        "name": "PEPSI - EKB",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11774&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11774&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11774&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11774&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11263",
        "id": "11263",
        "key": "PRGO3334",
        "name": "PERRIGO - AELN PROD Rollout",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11263&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11263&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11263&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11263&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12384",
        "id": "12384",
        "key": "ADQ3713",
        "name": "Perrigo - LES Implementation Israel",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12384&avatarId=11580",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12384&avatarId=11580",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12384&avatarId=11580",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12384&avatarId=11580"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10050",
            "id": "10050",
            "name": "ADQM"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12167",
        "id": "12167",
        "key": "LES",
        "name": "Perrigo - LES Implementation NY",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12167&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12167&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12167&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12167&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10050",
            "id": "10050",
            "name": "ADQM"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12570",
        "id": "12570",
        "key": "PFE5165",
        "name": "PFIZER - AELN + MAL Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12570&avatarId=11670",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12570&avatarId=11670",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12570&avatarId=11670",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12570&avatarId=11670"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10369",
        "id": "10369",
        "key": "PFRTAB",
        "name": "PFIZER - ANALYTICAL TAB",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10369&avatarId=10373",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10369&avatarId=10373",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10369&avatarId=10373",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10369&avatarId=10373"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11772",
        "id": "11772",
        "key": "3332",
        "name": "PFIZER - Clone Control",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11772&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11772&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11772&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11772&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13069",
        "id": "13069",
        "key": "BIOVIA6473",
        "name": "PFIZER - HTP Purification - Scope Analysis",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13069&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13069&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13069&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13069&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12563",
        "id": "12563",
        "key": "PFZ4763",
        "name": "PFIZER - Method Feedback Metrics D&D",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12563&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12563&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12563&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12563&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10215",
        "id": "10215",
        "key": "PFRNUG",
        "name": "Pfizer - NuGenesis Adaptor upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10215&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10215&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10215&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10215&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10234",
        "id": "10234",
        "key": "PFRPDF",
        "name": "Pfizer - PDF Export",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10234&avatarId=10161",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10234&avatarId=10161",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10234&avatarId=10161",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10234&avatarId=10161"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13274",
        "id": "13274",
        "key": "DS6792",
        "name": "Pfizer Inc.: HTP Purification - Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13274&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13274&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13274&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13274&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13163",
        "id": "13163",
        "key": "DS6493",
        "name": "Pfizer Inc.: Informatics CO#3",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13163&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13163&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13163&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13163&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13167",
        "id": "13167",
        "key": "DS6685",
        "name": "Pfizer Inc.: PFZ-MIU Project Fixed Price Ph1",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13167&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13167&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13167&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13167&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10764",
        "id": "10764",
        "key": "ELN2292",
        "name": "PFIZER: ELN TOXICOLOGY",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10764&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10764&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10764&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10764&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12884",
        "id": "12884",
        "key": "PMI5551",
        "name": "PHILIP MORRIS: Workbook Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12884&avatarId=12077",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12884&avatarId=12077",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12884&avatarId=12077",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12884&avatarId=12077"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10962",
        "id": "10962",
        "key": "1643",
        "name": "PLEXIKON - AE Data Clean Up",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10962&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10962&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10962&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10962&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10367",
        "id": "10367",
        "key": "PLXREG",
        "name": "Plexxikon Registration Enhancements",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10367&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10367&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10367&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10367&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12463",
        "id": "12463",
        "key": "PNG4493",
        "name": "PNG - Botanicals",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12463&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12463&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12463&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12463&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10792",
        "id": "10792",
        "key": "CON2994",
        "name": "PNG - Contur Deployment",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10792&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10792&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10792&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10792&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10051",
            "id": "10051",
            "name": "Contur",
            "description": "Contur"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12462",
        "id": "12462",
        "key": "PNG4238",
        "name": "PNG - GRASP Upgrade Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12462&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12462&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12462&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12462&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12460",
        "id": "12460",
        "key": "PNG4641",
        "name": "PNG - LabOne",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12460&avatarId=11573",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12460&avatarId=11573",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12460&avatarId=11573",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12460&avatarId=11573"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12466",
        "id": "12466",
        "key": "PNG4736",
        "name": "PNG - LIMS POC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12466&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12466&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12466&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12466&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12364",
        "id": "12364",
        "key": "PNG4167",
        "name": "PNG: Platform Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12364&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12364&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12364&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12364&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12985",
        "id": "12985",
        "key": "BIOVIA5999",
        "name": "PolyOne Corporation: EKB & Notebook Integration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12985&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12985&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12985&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12985&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13164",
        "id": "13164",
        "key": "DS6633",
        "name": "Procter & Gamble Company: Botanicals Safety Data - Phase 2",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13164&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13164&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13164&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13164&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13086",
        "id": "13086",
        "key": "BIOVIA6062",
        "name": "Procter & Gamble Company: Upgrade Support for CISPRO&MLM",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13086&avatarId=10875",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13086&avatarId=10875",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13086&avatarId=10875",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13086&avatarId=10875"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13097",
        "id": "13097",
        "key": "DS6370",
        "name": "Procter & Gamble Company: WOMS 4.0-4.1 Support Yr 2",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13097&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13097&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13097&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13097&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10247",
        "id": "10247",
        "key": "PNGHGS",
        "name": "Proctor and Gamble - Human Genome Science ABSiS",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10247&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10247&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10247&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10247&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10246",
        "id": "10246",
        "key": "PNGWOMS",
        "name": "Proctor and Gamble - WOMS",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10246&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10246&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10246&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10246&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13360",
        "id": "13360",
        "key": "PSJUZT",
        "name": "Prof. Services JIRA Upgrade and Zephyr Test",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?avatarId=12494",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&avatarId=12494",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&avatarId=12494",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&avatarId=12494"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12770",
        "id": "12770",
        "key": "INF4633",
        "name": "Proximagen Beehive replacement ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12770&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12770&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12770&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12770&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12861",
        "id": "12861",
        "key": "ELN5527",
        "name": "Proximagen Limited - Notebook upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12861&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12861&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12861&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12861&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13287",
        "id": "13287",
        "key": "DS6984",
        "name": "Proximagen Limited: Biovia Chemical Registration and Insight Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13287&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13287&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13287&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13287&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13467",
        "id": "13467",
        "key": "PS0JIRA0",
        "name": "PS_JIRA_TEST",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?avatarId=12494",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&avatarId=12494",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&avatarId=12494",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&avatarId=12494"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13468",
        "id": "13468",
        "key": "PS0JIRA1",
        "name": "PS_JIRA_TEST_2",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?avatarId=12494",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&avatarId=12494",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&avatarId=12494",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&avatarId=12494"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12572",
        "id": "12572",
        "key": "PTC4846",
        "name": "PTC - AELN Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12572&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12572&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12572&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12572&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12875",
        "id": "12875",
        "key": "RANB5877",
        "name": "RANBAXY - MicroBiology Methods",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12875&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12875&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12875&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12875&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13067",
        "id": "13067",
        "key": "BIOVIA6307",
        "name": "ratiopharm GmbH: Workbook Define & Design",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13067&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13067&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13067&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13067&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10180",
        "id": "10180",
        "key": "REAISU",
        "name": "Reata - Isentris Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10180&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10180&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10180&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10180&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10238",
        "id": "10238",
        "key": "REWF",
        "name": "Recordati ELN Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10238&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10238&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10238&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10238&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10140",
        "id": "10140",
        "key": "RGIVSU",
        "name": "Rega Institute - Virus Screening Upgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10140&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10140&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10140&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10140&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12574",
        "id": "12574",
        "key": "REGN3458",
        "name": "REGENERON - IPC Hierarchy",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12574&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12574&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12574&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12574&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10146",
        "id": "10146",
        "key": "RIBIU",
        "name": "Rib-X - Legacy ISIS application Updgrade",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10146&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10146&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10146&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10146&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10020",
            "id": "10020",
            "name": "Isentris",
            "description": "Isentris Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10245",
        "id": "10245",
        "key": "ROGIMS",
        "name": "Roche - IMS",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10245&avatarId=10571",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10245&avatarId=10571",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10245&avatarId=10571",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10245&avatarId=10571"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10244",
        "id": "10244",
        "key": "ROGPCICE",
        "name": "Roche - PCICE",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10244&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10244&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10244&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10244&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11778",
        "id": "11778",
        "key": "3319",
        "name": "Roche - Peptide Toolbox",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11778&avatarId=11081",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11778&avatarId=11081",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11778&avatarId=11081",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11778&avatarId=11081"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10224",
        "id": "10224",
        "key": "RITA",
        "name": "Roche - RITA 2011",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10224&avatarId=10151",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10224&avatarId=10151",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10224&avatarId=10151",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10224&avatarId=10151"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11869",
        "id": "11869",
        "key": "3374",
        "name": "ROCHE - Utilities Hierarchy",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11869&avatarId=11171",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11869&avatarId=11171",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11869&avatarId=11171",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11869&avatarId=11171"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10760",
        "id": "10760",
        "key": "RCPMS",
        "name": "Roche CPM Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10760&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10760&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10760&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10760&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11864",
        "id": "11864",
        "key": "PLP2821",
        "name": "Roche – NITP PP Transition",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11864&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11864&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11864&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11864&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12477",
        "id": "12477",
        "key": "ELN4593B",
        "name": "SABIC - AELN Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12477&avatarId=11586",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12477&avatarId=11586",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12477&avatarId=11586",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12477&avatarId=11586"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12977",
        "id": "12977",
        "key": "BIOVIA6220",
        "name": "SABIC: AELN Imp - Stage A - CO11",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12977&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12977&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12977&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12977&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12362",
        "id": "12362",
        "key": "KRX4071",
        "name": "SAMSUNG: 2014 R1 Hierarchies",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12362&avatarId=11475",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12362&avatarId=11475",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12362&avatarId=11475",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12362&avatarId=11475"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12164",
        "id": "12164",
        "key": "ADQ3029",
        "name": "SANDOZ - EBR",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12164&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12164&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12164&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12164&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10050",
            "id": "10050",
            "name": "ADQM"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12670",
        "id": "12670",
        "key": "ADQ5355",
        "name": "Sandoz - Sample Management POC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12670&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12670&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12670&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12670&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10237",
        "id": "10237",
        "key": "SANTFL",
        "name": "Sanofi - Turbidity File Loader ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10237&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10237&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10237&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10237&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12571",
        "id": "12571",
        "key": "SANF4853",
        "name": "SANOFI - Variant Analysis",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12571&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12571&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12571&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12571&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12775",
        "id": "12775",
        "key": "INF4785",
        "name": "Sanofi Bioreg Pilot",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12775&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12775&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12775&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12775&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10267",
        "id": "10267",
        "key": "SANRU",
        "name": "Sanofi CPD – Registration Update",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10267&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10267&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10267&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10267&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12461",
        "id": "12461",
        "key": "EKB2644",
        "name": "Sanofi Pasteur - EKB Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12461&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12461&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12461&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12461&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12964",
        "id": "12964",
        "key": "SBL6000",
        "name": "Schlumberger - Workbook Pilot",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12964&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12964&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12964&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12964&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11160",
        "id": "11160",
        "key": "SCINO2190",
        "name": "ScinopharmELN",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11160&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11160&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11160&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11160&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10147",
        "id": "10147",
        "key": "SCYSM",
        "name": "Scynexis – SIGMAG migration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10147&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10147&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10147&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10147&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10032",
            "id": "10032",
            "name": "Other"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13077",
        "id": "13077",
        "key": "BIOVIA5834",
        "name": "Seattle Genetics, Inc: Prototype Phase Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13077&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13077&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13077&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13077&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10360",
        "id": "10360",
        "key": "SELCIACR",
        "name": "Selcia - Chemreg",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10360&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10360&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10360&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10360&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13068",
        "id": "13068",
        "key": "BIOVIA6460",
        "name": "SER160224-Discoverant v5 Upgrades",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13068&avatarId=12175",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13068&avatarId=12175",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13068&avatarId=12175",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13068&avatarId=12175"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13266",
        "id": "13266",
        "key": "SPMT",
        "name": "Services US PM Team",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13266&avatarId=12377",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13266&avatarId=12377",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13266&avatarId=12377",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13266&avatarId=12377"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10790",
        "id": "10790",
        "key": "2385",
        "name": "Servier - ADMET SOW2",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10790&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10790&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10790&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10790&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10161",
        "id": "10161",
        "key": "SVRPPOR",
        "name": "Servier - PPORB4 CDC III Change Requests",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10161&avatarId=10130",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10161&avatarId=10130",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10161&avatarId=10130",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10161&avatarId=10130"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13298",
        "id": "13298",
        "key": "EKB7026",
        "name": "Shell - DMKE 2017",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13298&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13298&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13298&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13298&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10067",
        "id": "10067",
        "key": "SHLSD",
        "name": "Shell - DMKE Enhancements",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10067&avatarId=10080",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10067&avatarId=10080",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10067&avatarId=10080",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10067&avatarId=10080"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10066",
        "id": "10066",
        "key": "SHLSM",
        "name": "Shell - DMKE Support & Maintenance",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10066&avatarId=10079",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10066&avatarId=10079",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10066&avatarId=10079",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10066&avatarId=10079"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10194",
        "id": "10194",
        "key": "SHLGTLPC",
        "name": "Shell - EKB - Amsterdam Accelerate GTL POC ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10194&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10194&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10194&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10194&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10192",
        "id": "10192",
        "key": "SHLXRDPC",
        "name": "Shell - EKB - Amsterdam Accelerate XRD POC ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10192&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10192&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10192&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10192&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11260",
        "id": "11260",
        "key": "EKB1829",
        "name": "Shell - EKB Bitumen",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11260&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11260&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11260&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11260&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11861",
        "id": "11861",
        "key": "EKB3567",
        "name": "Shell - Paradox",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11861&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11861&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11861&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11861&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10219",
        "id": "10219",
        "key": "SHLBT",
        "name": "Shell Bitumen - EKB Pilot",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10219&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10219&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10219&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10219&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10773",
        "id": "10773",
        "key": "2512",
        "name": "Shell DMKE India",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10773&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10773&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10773&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10773&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12480",
        "id": "12480",
        "key": "SHP4991",
        "name": "SHIRE - 2014 Hierarchy Workshop",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12480&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12480&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12480&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12480&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12382",
        "id": "12382",
        "key": "ISE3686",
        "name": "SRV1608-CLEA",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12382&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12382&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12382&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12382&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13294",
        "id": "13294",
        "key": "DS6494",
        "name": "SRV1701 E-Chem Support",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13294&avatarId=12394",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13294&avatarId=12394",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13294&avatarId=12394",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13294&avatarId=12394"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12383",
        "id": "12383",
        "key": "STJ4183",
        "name": "ST JUDE - ELN & IM Implementation ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12383&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12383&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12383&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12383&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10560",
        "id": "10560",
        "key": "SCLELN",
        "name": "Stepan - ELN Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10560&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10560&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10560&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10560&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13161",
        "id": "13161",
        "key": "DS6535",
        "name": "Stepan Company: Label Comparison Protocol Enhancements",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13161&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13161&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13161&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13161&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12980",
        "id": "12980",
        "key": "BIOVIA5652",
        "name": "Stepan Company: Stepan AELN Tech Report",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12980&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12980&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12980&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12980&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10579",
        "id": "10579",
        "key": "SYMRISE",
        "name": "Symrise",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10579&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10579&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10579&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10579&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11765",
        "id": "11765",
        "key": "2728",
        "name": "SYNCRUDE - EKB Phase 1",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11765&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11765&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11765&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11765&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10119",
        "id": "10119",
        "key": "SYTAU",
        "name": "Syngenta - Aura",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10119&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10119&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10119&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10119&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12870",
        "id": "12870",
        "key": "ELN5500",
        "name": "Syngenta - Cloud notebook",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12870&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12870&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12870&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12870&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10118",
        "id": "10118",
        "key": "SYTLK",
        "name": "Syngenta - Link",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10118&avatarId=10103",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10118&avatarId=10103",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10118&avatarId=10103",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10118&avatarId=10103"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12869",
        "id": "12869",
        "key": "ELN2741",
        "name": "Syngenta - SN6.9 Upgrade Poc",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12869&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12869&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12869&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12869&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12771",
        "id": "12771",
        "key": "CSQ5366",
        "name": "Syngenta Coda Registration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12771&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12771&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12771&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12771&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13060",
        "id": "13060",
        "key": "BIOVIA6286",
        "name": "Syngenta Crop Protection AG: ELN Upgrade POC CO1",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13060&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13060&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13060&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13060&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13081",
        "id": "13081",
        "key": "BIOVIA6503",
        "name": "Syngenta Crop Protection AG: ELN/MatRef Enhancements 2016",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13081&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13081&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13081&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13081&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13070",
        "id": "13070",
        "key": "BIOVIA6454",
        "name": "Syngenta Crop Protection AG: Link Stabilization Delivery 2016",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13070&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13070&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13070&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13070&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13279",
        "id": "13279",
        "key": "DS6838",
        "name": "Syngenta Crop Protection AG: ScienceCloud Notebook to Biovia ELN for CRO",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13279&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13279&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13279&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13279&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12882",
        "id": "12882",
        "key": "SYNN5500",
        "name": "SYNGENTA: POC Cloud NTBK for CRO",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12882&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12882&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12882&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12882&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12881",
        "id": "12881",
        "key": "SYNN2741",
        "name": "SYNGENTA: SN6.9 Upgrade PoC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12881&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12881&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12881&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12881&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10170",
        "id": "10170",
        "key": "TRGTPNSN",
        "name": "Targacept - PN-SN Migration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10170&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10170&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10170&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10170&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13464",
        "id": "13464",
        "key": "DS9999",
        "name": "Test CLI Connector",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?avatarId=12494",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&avatarId=12494",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&avatarId=12494",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&avatarId=12494"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12575",
        "id": "12575",
        "key": "TEST4417",
        "name": "Test project ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12575&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12575&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12575&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12575&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12769",
        "id": "12769",
        "key": "ELN4502",
        "name": "The Pirbright Institute ELN Stage A",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12769&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12769&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12769&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12769&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13292",
        "id": "13292",
        "key": "DS7068",
        "name": "Thermo Fisher Scientific Oy: Biovia Notebook Additional Environment Installation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13292&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13292&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13292&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13292&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13291",
        "id": "13291",
        "key": "DS7093",
        "name": "Thermo Fisher Scientific Oy: Notebook Implementation Effort",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13291&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13291&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13291&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13291&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10196",
        "id": "10196",
        "key": "TMIPPCF",
        "name": "Thomson Reuters - PLP Chemistry Foundation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10196&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10196&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10196&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10196&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10072",
        "id": "10072",
        "key": "TTPP",
        "name": "TransTech Pharma - PP Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10072&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10072&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10072&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10072&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10000",
            "id": "10000",
            "name": "Pipeline Pilot",
            "description": "A Pipeline Pilot Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10160",
        "id": "10160",
        "key": "UCBELN",
        "name": "UCB - ELN & Logistics Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10160&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10160&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10160&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10160&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12970",
        "id": "12970",
        "key": "UCBELN2",
        "name": "UCB - ELN2",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12970&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12970&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12970&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12970&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12371",
        "id": "12371",
        "key": "ELN3549",
        "name": "UCB - NCE BELN",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12371&avatarId=11874",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12371&avatarId=11874",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12371&avatarId=11874",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12371&avatarId=11874"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13062",
        "id": "13062",
        "key": "BIOVIA6178",
        "name": "UCB Biopharma S.P.R.L.: UCB - PP Development Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13062&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13062&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13062&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13062&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10268",
        "id": "10268",
        "key": "UCBBL",
        "name": "UCB – Braine Logistics customization",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10268&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10268&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10268&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10268&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12168",
        "id": "12168",
        "key": "OTH3777",
        "name": "UDL - ChemReg & BioReg",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12168&avatarId=11373",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12168&avatarId=11373",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12168&avatarId=11373",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12168&avatarId=11373"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12878",
        "id": "12878",
        "key": "UMEA5335",
        "name": "UMEA - NTBK Migration",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12878&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12878&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12878&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12878&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12471",
        "id": "12471",
        "key": "EKB4824",
        "name": "Unilever - EKB Escience POC",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12471&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12471&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12471&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12471&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11783",
        "id": "11783",
        "key": "ELN3327",
        "name": "Unilever - ELN Phase 1&2",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11783&avatarId=11077",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11783&avatarId=11077",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11783&avatarId=11077",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11783&avatarId=11077"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12166",
        "id": "12166",
        "key": "ELN3975",
        "name": "Unilever - ELN VPC POCs",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12166&avatarId=11370",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12166&avatarId=11370",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12166&avatarId=11370",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12166&avatarId=11370"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10216",
        "id": "10216",
        "key": "ULREVAL",
        "name": "Unilever - HTS EKB Search Evaluation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10216&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10216&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10216&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10216&avatarId=10011"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10040",
            "id": "10040",
            "name": "Experiment Knowledge Base",
            "description": "An EKB project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12479",
        "id": "12479",
        "key": "ELN4837",
        "name": "Unilever - Phase 3",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12479&avatarId=11591",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12479&avatarId=11591",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12479&avatarId=11591",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12479&avatarId=11591"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12774",
        "id": "12774",
        "key": "ELN5179",
        "name": "Unilever ELN services ",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12774&avatarId=11879",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12774&avatarId=11879",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12774&avatarId=11879",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12774&avatarId=11879"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13296",
        "id": "13296",
        "key": "DS6874I",
        "name": "Unilever Nexus Program Operations (INTERNAL ONLY)",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13296&avatarId=12395",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13296&avatarId=12395",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13296&avatarId=12395",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13296&avatarId=12395"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10032",
            "id": "10032",
            "name": "Other"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13297",
        "id": "13297",
        "key": "DS6874O",
        "name": "Unilever Nexus Program Operations (OPEN)",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13297&avatarId=12397",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13297&avatarId=12397",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13297&avatarId=12397",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13297&avatarId=12397"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13271",
        "id": "13271",
        "key": "DS6874",
        "name": "UNILEVER RESEARCH: Structured Data Capture",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13271&avatarId=12374",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13271&avatarId=12374",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13271&avatarId=12374",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13271&avatarId=12374"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10781",
        "id": "10781",
        "key": "ELN2826",
        "name": "University of Strathclyde - ELN Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10781&avatarId=11584",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10781&avatarId=11584",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10781&avatarId=11584",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10781&avatarId=11584"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13262",
        "id": "13262",
        "key": "DS6525",
        "name": "Upsher-Smith Laboratories, Inc.: OneLab Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13262&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13262&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13262&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13262&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12966",
        "id": "12966",
        "key": "VLT5808",
        "name": "VALENT- BELN Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12966&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12966&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12966&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12966&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10064",
        "id": "10064",
        "key": "VTXELN",
        "name": "Vertex - ELN",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10064&avatarId=10010",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10064&avatarId=10010",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10064&avatarId=10010",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10064&avatarId=10010"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12360",
        "id": "12360",
        "key": "ADQ3837",
        "name": "Vetter-Pharma Fertigung GmbH & KG: VEP130930-01: Pilot Paperless Lab",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12360&avatarId=11472",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12360&avatarId=11472",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12360&avatarId=11472",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12360&avatarId=11472"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10050",
            "id": "10050",
            "name": "ADQM"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12367",
        "id": "12367",
        "key": "WWCLIN4102",
        "name": "WORLDWIDE CLIN: Inventory & Metrology",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12367&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12367&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12367&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12367&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12569",
        "id": "12569",
        "key": "WUXI5219",
        "name": "WUXI - BMS Empower Data Export Utility",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12569&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12569&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12569&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12569&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/10131",
        "id": "10131",
        "key": "XENELN",
        "name": "Xention – NB Custom Services",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=10131&avatarId=10110",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=10131&avatarId=10110",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=10131&avatarId=10110",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=10131&avatarId=10110"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/12762",
        "id": "12762",
        "key": "ZTS4924",
        "name": "ZOETIS - Phase 4 Implementation",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=12762&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=12762&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=12762&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=12762&avatarId=10011"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/11763",
        "id": "11763",
        "key": "ELN3110",
        "name": "ZOETIS - Research Informatics Suite",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=11763&avatarId=11075",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=11763&avatarId=11075",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=11763&avatarId=11075",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=11763&avatarId=11075"
        },
        "projectCategory": {
            "self": "http://jiraps-test-upgrade:8080/rest/api/2/projectCategory/10001",
            "id": "10001",
            "name": "ELN",
            "description": "An ELN Project"
        },
        "projectTypeKey": "software"
    },
    {
        "expand": "description,lead,url,projectKeys",
        "self": "http://jiraps-test-upgrade:8080/rest/api/2/project/13276",
        "id": "13276",
        "key": "DS4287",
        "name": "Zoetis: BIOVIA Workbook 2017 / BIOVIA ChemReg 2017 - PENDING PO",
        "avatarUrls": {
            "48x48": "http://jiraps-test-upgrade:8080/secure/projectavatar?pid=13276&avatarId=10011",
            "24x24": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=small&pid=13276&avatarId=10011",
            "16x16": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=xsmall&pid=13276&avatarId=10011",
            "32x32": "http://jiraps-test-upgrade:8080/secure/projectavatar?size=medium&pid=13276&avatarId=10011"
        },
        "projectTypeKey": "software"
    }
]*/