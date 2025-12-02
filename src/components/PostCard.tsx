// src/components/PostCard.tsx

import { Suspense } from "react";
import CommentsSection from "./CommentsSection";
import CommentsSkeleton from "./CommentsSkeleton";
import { WidgetErrorBoundary } from "./WidgetErrorBoundary.client";
import LikeButton from "./LikeButton.client";

interface PostCardProps {
  post: {
    id: string;
    content: string;
    author: string;
    createdAt: string;
    likes: number;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow border">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">{post.author}</span>
        <span className="text-sm text-neutral-500">{post.createdAt}</span>
      </div>

      <p className="mb-3 text-neutral-800">{post.content}</p>

      <div className="text-sm text-neutral-500 mb-2">{post.likes} ❤️ Likes</div>

      {/* ⚠️ Isolated error boundary for comments */}
      <WidgetErrorBoundary
        fallback={
          <div className="text-sm text-red-600">
            Failed to load comments for this post.
          </div>
        }
      >
        <Suspense fallback={<CommentsSkeleton />}>
          <CommentsSection postId={post.id} />
        </Suspense>
      </WidgetErrorBoundary>
      <div className="flex items-center gap-2">
        <LikeButton postId={post.id} initialLikes={post.likes} />
      </div>
    </div>
  );
}
