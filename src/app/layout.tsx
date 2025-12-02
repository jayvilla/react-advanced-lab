import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "React Advanced Lab",
  description: "Suspense, RSC, Streaming, Server Actions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-100 text-neutral-900 antialiased">
        <header className="w-full border-b bg-white sticky top-0 z-20">
          <div className="mx-auto max-w-3xl px-4 py-4 flex items-center justify-between">
            <span className="font-semibold text-lg">
              React Advanced Lab — Project 3
            </span>
            <nav className="flex gap-4 text-sm">
              <Link href="/feed" prefetch className="hover:underline">
                Feed
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-3xl p-4">{children}</main>
      </body>
    </html>
  );
}
