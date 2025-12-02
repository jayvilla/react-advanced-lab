"use client";

import { likePost } from "@/actions/postActions";
import { useTransition, useState } from "react";

export default function LikeButton({
  postId,
  initialLikes,
}: {
  postId: string;
  initialLikes: number;
}) {
  const [likes, setLikes] = useState(initialLikes);
  const [isPending, startTransition] = useTransition();

  const handleLike = () => {
    // Optimistic update
    setLikes((l) => l + 1);

    startTransition(async () => {
      try {
        await likePost(postId);
      } catch (err) {
        console.error(err);
        // Rollback on failure
        setLikes((l) => l - 1);
      }
    });
  };

  return (
    <button
      onClick={handleLike}
      disabled={isPending}
      className={`text-sm px-2 py-1 rounded ${
        isPending ? "opacity-50" : "hover:bg-neutral-200"
      }`}
    >
      ❤️ {likes}
    </button>
  );
}
