// src/components/CommentsSection.tsx

import { getCommentsForPost } from "@/lib/comments";
import CommentsList from "./CommentsList";
import CommentForm from "./CommentForm.client";

export default async function CommentsSection({ postId }: { postId: string }) {
  // 🔥 Simulate error for testing
  if (postId === "2") {
    throw new Error("Simulated fetch error for post 2");
  }

  const comments = await getCommentsForPost(postId);

  return (
    <div>
      <CommentsList comments={comments} />
      {/* Comment form (client component) */}
      <CommentForm postId={postId} />
    </div>
  );
}
