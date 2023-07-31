declare module "@salesforce/apex/LtngEventController.updateEventDetails" {
  export default function updateEventDetails(param: {inEventData: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngEventController.updateEventData" {
  export default function updateEventData(param: {inEventData: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngEventController.getEventDefaultsByRecordType" {
  export default function getEventDefaultsByRecordType(param: {inRecordTypeId: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngEventController.getEventDefaultsByRecordTypeDetails" {
  export default function getEventDefaultsByRecordTypeDetails(param: {inRecordTypeId: any, inSubject: any, inEmaillist: any, inOwnerId: any, inStartDate: any, inEndDate: any, inDescription: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngEventController.getEventDataById" {
  export default function getEventDataById(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngEventController.getPicklistValues" {
  export default function getPicklistValues(param: {objectName: any, fieldName: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngEventController.searchAccounts" {
  export default function searchAccounts(param: {searchTerm: any, selectedIds: any, excludedIds: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngEventController.searchProducers" {
  export default function searchProducers(param: {searchTerm: any, selectedIds: any, excludedIds: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngEventController.searchUsers" {
  export default function searchUsers(param: {searchTerm: any, selectedIds: any, excludedIds: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngEventController.searchContacts" {
  export default function searchContacts(param: {searchTerm: any, selectedIds: any, excludedIds: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngEventController.searchLeads" {
  export default function searchLeads(param: {searchTerm: any, selectedIds: any, excludedIds: any}): Promise<any>;
}
