export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface QueryParamsPost {
  limit: number;
  start: number;
}
