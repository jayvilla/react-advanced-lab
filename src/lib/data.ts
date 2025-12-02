// src/lib/data.ts

export let posts = [
  {
    id: "1",
    author: "Jeff",
    content: "Learning React Server Components is actually fun.",
    createdAt: "2h ago",
    likes: 12,
  },
  {
    id: "2",
    author: "Bay",
    content: "Suspense makes UI feel more alive.",
    createdAt: "5h ago",
    likes: 33,
  },
  {
    id: "3",
    author: "Twin",
    content: "Streaming UI is underrated 🔥",
    createdAt: "1d ago",
    likes: 8,
  },
];

export let comments = {
  "1": [
    { id: "c1", text: "Facts.", author: "Bay", createdAt: "1h ago" },
    { id: "c2", text: "Same here.", author: "Twin", createdAt: "30m ago" },
  ],
  "2": [
    {
      id: "c3",
      text: "Streaming UI ?? 👀",
      author: "Jeff",
      createdAt: "3h ago",
    },
  ],
  "3": [],
};
