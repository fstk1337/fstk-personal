import { Post } from '@/models/Post';
import { User } from '@/models/User';

export interface BlogContentProps {
    showPosts: boolean;
    user: User | null;
    posts: Post[] | null;
}
