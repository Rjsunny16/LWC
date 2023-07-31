declare module "@salesforce/apex/TableViewer.getRecords" {
  export default function getRecords(param: {ClientId: any, queryStringValue: any, metadataname: any}): Promise<any>;
}
declare module "@salesforce/apex/TableViewer.getHeaders" {
  export default function getHeaders(param: {ClientId: any, metadataname: any}): Promise<any>;
}
declare module "@salesforce/apex/TableViewer.userCanAccessRecord" {
  export default function userCanAccessRecord(param: {recordId: any}): Promise<any>;
}
