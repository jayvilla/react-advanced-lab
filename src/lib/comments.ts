// src/lib/comments.ts
import { unstable_cache } from "next/cache";
import { comments } from "./data";

async function fetchCommentsForPost(postId: string) {
  // simulate slower DB call
  await new Promise((res) => setTimeout(res, 700));
  return structuredClone(comments[postId] || []);
}

export const getCommentsForPost = unstable_cache(
  (postId: string) => fetchCommentsForPost(postId),
  ["getCommentsForPost"],
  {
    tags: (args) => {
      const [postId] = args;
      return [`comments:${postId}`];
    },
  }
);
