
async function getData(id){
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return response.json()
} 
export async function generateMetadata({params}){
  const post = await getData(params.id);
  return {
    title: `Post | ${post.title}`,
  }
}

export default async function PostPage ({params}) {
  const posts = await getData(params.id)
  return (
    
    <>
          <h1>{posts.title} </h1>
          <div>{posts.id}</div>
    </>

  )
}

// const PostPage = ({params}) => {

//   return (
//     <>
//           <h1>Post page {params.id} </h1>
//     </>

//   )
// }

// export default PostPage;