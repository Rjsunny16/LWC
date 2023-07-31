declare module "@salesforce/apex/SMCExport.getexportfields" {
  export default function getexportfields(param: {recordId: any, metadataname: any}): Promise<any>;
}
declare module "@salesforce/apex/SMCExport.dataExport" {
  export default function dataExport(param: {recordList: any, moreFields: any, exportData: any, objectName: any, exportFileName: any, sortfield: any, sortasc: any, initname: any}): Promise<any>;
}
