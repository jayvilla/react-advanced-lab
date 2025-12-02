// src/components/PostList.tsx

import PostCard from "./PostCard";

interface Post {
  id: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
