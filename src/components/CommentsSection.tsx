// src/components/CommentsSection.tsx

import { getCommentsForPost } from "@/lib/comments";
import CommentsList from "./CommentsList";

export default async function CommentsSection({ postId }: { postId: string }) {
  // Simulate slow DB fetch
  const comments = await getCommentsForPost(postId);

  return <CommentsList comments={comments} />;
}
