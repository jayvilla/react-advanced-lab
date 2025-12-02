"use client";

import { addComment } from "@/actions/commentActions";
import { useState, useTransition } from "react";

export default function CommentForm({ postId }: { postId: string }) {
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const commentText = text;
    setText("");

    startTransition(async () => {
      await addComment(postId, commentText);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
        className="flex-1 border rounded px-2 py-1 text-sm"
      />
      <button
        type="submit"
        disabled={isPending}
        className="text-sm px-2 py-1 bg-black text-white rounded"
      >
        {isPending ? "..." : "Post"}
      </button>
    </form>
  );
}
