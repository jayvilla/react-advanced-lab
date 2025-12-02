// src/app/feed/page.tsx

import PostList from "@/components/PostList";
import { getPosts } from "@/lib/posts";

export default async function FeedPage() {
  const posts = await getPosts();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Your Feed</h1>
      <PostList posts={posts} />
    </div>
  );
}
