import Link from "next/link";
export const metadata = {
  title: "blog | asasfas |afas",
  description: "qefgrwggrwffffffffffffffff"
}
async function getData(){
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if(!response.ok) throw new Error("Unable fetch v")
  return response.json()
} 

 export default async function Blog () {
  const posts = await getData();

  return (
    <>
    <h1>Blog page</h1>
    <ul>
      {posts.map(post=>(
        <li><Link key={post.id} href={`/blog/${post.id}`}>{post.title}</Link></li>
      ))}
    </ul>
    </>
    

  )
}

