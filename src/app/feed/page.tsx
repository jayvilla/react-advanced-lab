import PostList from "@/components/PostList";
import { mockPosts } from "@/lib/mock-posts";

export default function FeedPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Your Feed</h1>
      <PostList posts={mockPosts} />
    </div>
  );
}
