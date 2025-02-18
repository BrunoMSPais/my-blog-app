export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  userType: 'author' | 'visitor';
  avatarUrl?: string;
  posts?: number[]; // postIds
  replies?: number[]; // replyIds
  socialNetworkIds?: number[];
  createdAt: string;
  updatedAt: string;
};
