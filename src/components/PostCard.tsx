// src/components/PostCard.tsx

import { Suspense } from "react";
import CommentsSection from "./CommentsSection";
import CommentsSkeleton from "./CommentsSkeleton";

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

      {/* 🌊 Suspense Boundary for streaming comments */}
      <Suspense
        fallback={
          <div className="text-sm text-neutral-500">
            <CommentsSkeleton />
          </div>
        }
      >
        <CommentsSection postId={post.id} />
      </Suspense>
    </div>
  );
}
