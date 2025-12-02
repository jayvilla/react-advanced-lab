// src/lib/comments.ts
import { comments } from "./data";

export async function getCommentsForPost(postId: string) {
  // simulate slower DB call
  await new Promise((res) => setTimeout(res, 700));

  return structuredClone(comments[postId] || []);
}
