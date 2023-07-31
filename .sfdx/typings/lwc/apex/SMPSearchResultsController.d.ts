declare module "@salesforce/apex/SMPSearchResultsController.getRecentlyViewed" {
  export default function getRecentlyViewed(): Promise<any>;
}
declare module "@salesforce/apex/SMPSearchResultsController.producerAdvancedSearch" {
  export default function producerAdvancedSearch(param: {producername: any, producerNumber: any, producerCity: any, ultimateOnly: any}): Promise<any>;
}
declare module "@salesforce/apex/SMPSearchResultsController.populateResults" {
  export default function populateResults(param: {targetIds: any}): Promise<any>;
}
declare module "@salesforce/apex/SMPSearchResultsController.searchProducer" {
  export default function searchProducer(param: {searchString: any}): Promise<any>;
}
