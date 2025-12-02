# 📘 React Advanced Features Lab

### _Suspense • RSC • Streaming • Server Actions • Optimistic UI • Cache Tags_

This project is a **Twitter/X-style micro-feed** designed as a focused lab to help you master the most advanced features of **React 19 + Next.js 14**:

- React Server Components (RSC)
- Suspense boundaries
- Streaming UI
- Server Actions
- Optimistic updates
- Error boundaries
- Cache tags + `revalidateTag`
- `useTransition`
- Prefetching
- Granular cache invalidation

This is intentionally not a full production app — it’s a **learning playground** for senior-level frontend concepts.

---

## 🧱 Tech Stack

- **Next.js 14** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **pnpm**
- **Server Actions**
- **RSC + Suspense + Streaming**
- In-memory data store (for simplicity)

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run the dev server

```bash
pnpm dev
```

## 📂 Folder Structure

```bash
src/
  app/
    feed/
      page.tsx            # Server Component feed page
    actions/
      postActions.ts      # Server Action: likePost
      commentActions.ts   # Server Action: addComment
    layout.tsx
    globals.css

  components/
    PostList.tsx
    PostCard.tsx
    CommentsSection.tsx      # Async Server Component
    CommentsList.tsx
    CommentsSkeleton.tsx
    WidgetErrorBoundary.client.tsx
    LikeButton.client.tsx
    CommentForm.client.tsx

  lib/
    data.ts                 # In-memory mock DB
    posts.ts                # Cached RSC data accessors
    comments.ts             # Cached RSC comments accessors

```
