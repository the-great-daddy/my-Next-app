import getAllPostsFromAPI from "@/lib/getAllPostsFromAPI";
import Link from "next/link";

export default async function Posts() {
  const posts = await getAllPostsFromAPI();
  console.log(posts);
  return (
    <div className="mt-6">
      <h1>All posts</h1>
      <ul className="mt-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <strong className="text-blue-500">{post.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
