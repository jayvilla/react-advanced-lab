// src/components/CommentsList.tsx

interface Comment {
  id: string;
  text: string;
  author: string;
  createdAt: string;
}

export default function CommentsList({ comments }: { comments: Comment[] }) {
  if (comments.length === 0) {
    return <div className="text-sm text-neutral-600 mt-2">No comments yet</div>;
  }

  return (
    <div className="space-y-2 mt-3">
      {comments.map((c) => (
        <div
          key={c.id}
          className="
              border 
              rounded-lg 
              p-3 
              bg-neutral-100 
              text-sm 
              flex 
              justify-between 
              items-start
            "
        >
          <div className="flex-1">
            <span className="font-semibold text-neutral-900">{c.author}</span>
            <span className="text-neutral-900 ml-2">{c.text}</span>
          </div>
          <span className="text-neutral-600 text-xs ml-3 whitespace-nowrap">
            {c.createdAt}
          </span>
        </div>
      ))}
    </div>
  );
}
