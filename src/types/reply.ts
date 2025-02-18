export type Reply = {
  id: number;
  postId: number;
  userId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  relatedReplyId?: number;
};
