// src/lib/posts.ts
import { unstable_cache } from "next/cache";
import { posts } from "./data";

async function fetchPosts() {
  // simulate DB latency
  await new Promise((res) => setTimeout(res, 150));
  return structuredClone(posts);
}

async function fetchPostById(id: string) {
  await new Promise((res) => setTimeout(res, 100));
  return posts.find((p) => p.id === id) ?? null;
}

// Cached helpers with tags
export const getPosts = unstable_cache(fetchPosts, ["getPosts"], {
  tags: ["posts"],
});

export const getPostById = unstable_cache(
  (id: string) => fetchPostById(id),
  ["getPostById"],
  {
    tags: ["posts"],
  }
);
