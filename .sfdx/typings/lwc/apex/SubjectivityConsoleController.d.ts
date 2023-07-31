declare module "@salesforce/apex/SubjectivityConsoleController.addItemAction" {
  export default function addItemAction(param: {OpportunityId: any}): Promise<any>;
}
declare module "@salesforce/apex/SubjectivityConsoleController.getSubjectivities" {
  export default function getSubjectivities(param: {oppId: any}): Promise<any>;
}
declare module "@salesforce/apex/SubjectivityConsoleController.getSubjItems" {
  export default function getSubjItems(param: {oppId: any}): Promise<any>;
}
declare module "@salesforce/apex/SubjectivityConsoleController.addCustItemAction" {
  export default function addCustItemAction(): Promise<any>;
}
declare module "@salesforce/apex/SubjectivityConsoleController.getContactName" {
  export default function getContactName(param: {oppId: any}): Promise<any>;
}
declare module "@salesforce/apex/SubjectivityConsoleController.getOppRecDetails" {
  export default function getOppRecDetails(param: {oppId: any}): Promise<any>;
}
declare module "@salesforce/apex/SubjectivityConsoleController.delRecords" {
  export default function delRecords(param: {oppId: any, subjectivityItems: any}): Promise<any>;
}
declare module "@salesforce/apex/SubjectivityConsoleController.saveRecords" {
  export default function saveRecords(param: {oppId: any, preDefinedItems: any, customItems: any, frequency: any, con1: any, con2: any, Items: any}): Promise<any>;
}
declare module "@salesforce/apex/SubjectivityConsoleController.consoleSaveAction" {
  export default function consoleSaveAction(): Promise<any>;
}
