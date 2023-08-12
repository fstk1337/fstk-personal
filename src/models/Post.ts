export interface Post {
  id: number;
  title: string;
  date: string;
  content: string;
  user: {
    email: string;
    nickname: string;
    first_name: string;
    last_name: string;
  };
}
