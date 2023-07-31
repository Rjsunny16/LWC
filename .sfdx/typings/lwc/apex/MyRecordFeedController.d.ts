declare module "@salesforce/apex/MyRecordFeedController.getEnhancedFeedSearch" {
  export default function getEnhancedFeedSearch(param: {startRow: any, maxRows: any}): Promise<any>;
}
declare module "@salesforce/apex/MyRecordFeedController.getEnhancedRecordFeed" {
  export default function getEnhancedRecordFeed(): Promise<any>;
}
declare module "@salesforce/apex/MyRecordFeedController.likeSelectedPost" {
  export default function likeSelectedPost(param: {selectedPost: any}): Promise<any>;
}
declare module "@salesforce/apex/MyRecordFeedController.updateLikeForFeedElement" {
  export default function updateLikeForFeedElement(param: {selectedPost: any, updatedValue: any}): Promise<any>;
}
declare module "@salesforce/apex/MyRecordFeedController.favoriteSelectedPost" {
  export default function favoriteSelectedPost(param: {selectedPost: any}): Promise<any>;
}
declare module "@salesforce/apex/MyRecordFeedController.commentSelectedPost" {
  export default function commentSelectedPost(param: {selectedPost: any, postContent: any}): Promise<any>;
}
declare module "@salesforce/apex/MyRecordFeedController.getRecordFeed" {
  export default function getRecordFeed(): Promise<any>;
}
