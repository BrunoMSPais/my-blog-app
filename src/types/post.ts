export type Post = {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  replies?: number[]; // replyIds
};
