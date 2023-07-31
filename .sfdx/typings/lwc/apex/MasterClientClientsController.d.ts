declare module "@salesforce/apex/MasterClientClientsController.getDandBClients" {
  export default function getDandBClients(param: {MasterClientId: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientClientsController.getMasterClientInfo" {
  export default function getMasterClientInfo(param: {MasterClientId: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientClientsController.searchMasterClient" {
  export default function searchMasterClient(param: {searchTerm: any, selectedIds: any, excludedIds: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientClientsController.fetchAccount" {
  export default function fetchAccount(param: {searchKeyWord: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientClientsController.getAccountById" {
  export default function getAccountById(param: {accountId: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientClientsController.createContactRecord" {
  export default function createContactRecord(param: {newContact: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientClientsController.moveClientsToOldSMC" {
  export default function moveClientsToOldSMC(param: {currentSMC: any, inClients: any, newSMC: any}): Promise<any>;
}
declare module "@salesforce/apex/MasterClientClientsController.moveClientsToNewSMC" {
  export default function moveClientsToNewSMC(param: {currentSMC: any, inClients: any, newSMCName: any}): Promise<any>;
}
