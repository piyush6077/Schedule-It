// app/dashboard/page.tsx
import Link from "next/link"

export default function DashboardPage() {
  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Scheduled Posts</h1>
        <Link href="/dashboard/create-post">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
            + Create Post
          </button>
        </Link>
      </div>

      {/* Placeholder for post list */}
      <div className="text-gray-500">
        You haven’t scheduled any posts yet.
      </div>
    </main>
  )
}
