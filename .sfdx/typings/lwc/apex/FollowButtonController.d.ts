declare module "@salesforce/apex/FollowButtonController.isFollowing" {
  export default function isFollowing(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/FollowButtonController.toggleFollowing" {
  export default function toggleFollowing(param: {recordId: any, following: any}): Promise<any>;
}
