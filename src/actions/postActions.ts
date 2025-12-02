"use server";

import { revalidatePath } from "next/cache";
import { posts } from "@/lib/data";

export async function likePost(postId: string) {
  // Simulate DB write delay
  await new Promise((res) => setTimeout(res, 200));

  const post = posts.find((p) => p.id === postId);
  if (!post) throw new Error("Post not found");

  post.likes += 1;

  // Revalidate the feed page so it shows updated likes
  revalidatePath("/feed");
}
