// src/components/CommentsSkeleton.tsx

export default function CommentsSkeleton() {
  return (
    <div className="mt-2 space-y-2 animate-pulse">
      <div className="h-4 w-1/2 bg-neutral-300 rounded" />
      <div className="h-4 w-3/4 bg-neutral-300 rounded" />
      <div className="h-4 w-2/5 bg-neutral-300 rounded" />
    </div>
  );
}
