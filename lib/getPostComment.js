export default async function getPostComment(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  if (!result.ok) {
    throw new Error("Something went wrong fetching a post-comment");
  }
  return result.json();
}
