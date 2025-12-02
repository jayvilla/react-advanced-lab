// src/lib/posts.ts
import { posts } from "./data";

export async function getPosts() {
  // simulate DB latency
  await new Promise((res) => setTimeout(res, 150));

  // return a copy (avoid accidental mutation)
  return structuredClone(posts);
}

export async function getPostById(id: string) {
  await new Promise((res) => setTimeout(res, 100));

  return posts.find((p) => p.id === id) ?? null;
}
