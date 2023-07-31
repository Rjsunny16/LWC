declare module "@salesforce/apex/FollowersCmpController.getFollowers" {
  export default function getFollowers(param: {objectName: any, recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/FollowersCmpController.getFollowing" {
  export default function getFollowing(): Promise<any>;
}
declare module "@salesforce/apex/FollowersCmpController.search" {
  export default function search(param: {searchTerm: any, selectedIds: any, excludedIds: any}): Promise<any>;
}
declare module "@salesforce/apex/FollowersCmpController.submitFollowers" {
  export default function submitFollowers(param: {objectName: any, recordId: any, selectedUsersStr: any}): Promise<any>;
}
declare module "@salesforce/apex/FollowersCmpController.deleteFollower" {
  export default function deleteFollower(param: {objectName: any, recordId: any, userId: any}): Promise<any>;
}
declare module "@salesforce/apex/FollowersCmpController.canManageFollowers" {
  export default function canManageFollowers(): Promise<any>;
}
