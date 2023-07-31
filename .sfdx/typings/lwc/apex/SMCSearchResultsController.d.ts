declare module "@salesforce/apex/SMCSearchResultsController.getRecentlyViewed" {
  export default function getRecentlyViewed(): Promise<any>;
}
declare module "@salesforce/apex/SMCSearchResultsController.searchMasterClient" {
  export default function searchMasterClient(param: {searchString: any, inSortBy: any, inMasterFlag: any}): Promise<any>;
}
declare module "@salesforce/apex/SMCSearchResultsController.mergeClients" {
  export default function mergeClients(param: {ToId: any, FromId: any}): Promise<any>;
}
declare module "@salesforce/apex/SMCSearchResultsController.canSeeInitiatives" {
  export default function canSeeInitiatives(): Promise<any>;
}
declare module "@salesforce/apex/SMCSearchResultsController.canMergeMasterClients" {
  export default function canMergeMasterClients(): Promise<any>;
}
