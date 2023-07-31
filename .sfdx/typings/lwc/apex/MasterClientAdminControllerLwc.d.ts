declare module "@salesforce/apex/MasterClientAdminControllerLwc.doClientQuery" {
  export default function doClientQuery(param: {ClientName: any, ClientDUNS: any, ClientCity: any, ClientState: any, ClientCountry: any, ClientNumberofSubs: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.doSubmissionQuery" {
  export default function doSubmissionQuery(param: {SubmissionName: any, SubmissionInsuredName: any, BussinessUnit: any, ProfitCenter: any, ProductProfitCenter: any, LineOfBussiness: any, PolicyNumber: any, AssignedProductionOffice: any, ExpirationDate: any, EffectiveDate: any, submissiontypes: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.getMasterClientRecord" {
  export default function getMasterClientRecord(param: {getMasterClientId: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.deleteAccJnc" {
  export default function deleteAccJnc(param: {accIds: any, masterLinkId: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.deleteOppJnc" {
  export default function deleteOppJnc(param: {oppIds: any, masterLinkId: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.deleteAlias" {
  export default function deleteAlias(param: {aliasIds: any, masterLinkId: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.getStatesPickListValues" {
  export default function getStatesPickListValues(): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.getCountryPickListValues" {
  export default function getCountryPickListValues(): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.getBUS" {
  export default function getBUS(): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.getPC" {
  export default function getPC(param: {inputString: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.getPPC" {
  export default function getPPC(param: {inputString1: any, inputString2: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.getLOB" {
  export default function getLOB(param: {inputString1: any, inputString2: any, inputString3: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.getAPB" {
  export default function getAPB(param: {inputString1: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.addNewAlias" {
  export default function addNewAlias(param: {newAlias: any, masterLinkId: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.addClientsToMaster" {
  export default function addClientsToMaster(param: {addClientsToMasterRecord: any, masterLinkId: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientAdminControllerLwc.addSubmissionToMaster" {
  export default function addSubmissionToMaster(param: {addSubmissionsToMasterRecord: any, masterLinkId: any}): Promise<any>;
}
