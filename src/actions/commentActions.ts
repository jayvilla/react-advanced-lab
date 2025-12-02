"use server";

import { revalidateTag } from "next/cache";
import { comments } from "@/lib/data";

export async function addComment(postId: string, text: string) {
  await new Promise((res) => setTimeout(res, 300));

  if (!comments[postId]) comments[postId] = [];

  comments[postId].push({
    id: Math.random().toString(36).slice(2),
    text,
    author: "You",
    createdAt: "just now",
  });

  // Bust the comments cache for this specific post
  revalidateTag(`comments:${postId}`);
}
