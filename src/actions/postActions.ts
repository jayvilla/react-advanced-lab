"use server";

import { revalidateTag } from "next/cache";
import { posts } from "@/lib/data";

export async function likePost(postId: string) {
  await new Promise((res) => setTimeout(res, 200));

  const post = posts.find((p) => p.id === postId);
  if (!post) throw new Error("Post not found");

  post.likes += 1;

  // Bust all "posts" caches
  revalidateTag("posts");
}
