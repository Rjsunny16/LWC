declare module "@salesforce/apex/LtngActivityController.getMeetingNotes" {
  export default function getMeetingNotes(param: {eventId: any, eventNoteRelation: any, userId: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngActivityController.updateEventDetails" {
  export default function updateEventDetails(param: {eventId: any, eventType: any, associatedObject: any, userId: any, thisActivityString: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngActivityController.updateMeetingNotes" {
  export default function updateMeetingNotes(param: {eventId: any, meetingNotes: any, meetingResult: any, meetingForward: any, userId: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngActivityController.getEventsByEmail" {
  export default function getEventsByEmail(param: {inEmails: any, sortBy: any, sortDirection: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngActivityController.getEventsBySubject" {
  export default function getEventsBySubject(param: {inSubject: any, sortBy: any, sortDirection: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngActivityController.getAllActivity" {
  export default function getAllActivity(param: {recordId: any, objectType: any, sortBy: any, sortDirection: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngActivityController.getActivityHistory" {
  export default function getActivityHistory(param: {recordId: any, objectType: any, sortBy: any, sortDirection: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngActivityController.getOpenActivities" {
  export default function getOpenActivities(param: {recordId: any, objectType: any, sortBy: any, sortDirection: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngActivityController.getPicklistValues" {
  export default function getPicklistValues(param: {objectName: any, fieldName: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngActivityController.searchAccounts" {
  export default function searchAccounts(param: {searchTerm: any, selectedIds: any, excludedIds: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngActivityController.searchProducers" {
  export default function searchProducers(param: {searchTerm: any, selectedIds: any, excludedIds: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngActivityController.searchUsers" {
  export default function searchUsers(param: {searchTerm: any, selectedIds: any, excludedIds: any}): Promise<any>;
}
declare module "@salesforce/apex/LtngActivityController.searchContacts" {
  export default function searchContacts(param: {searchTerm: any, selectedIds: any, excludedIds: any}): Promise<any>;
}
