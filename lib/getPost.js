export default async function getPost(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!result.ok) {
    throw new Error("Something went wrong fetching a post");
  }
  return result.json();
}
