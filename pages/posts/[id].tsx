import type { NextPage } from 'next'
import { Post } from '../../models/Post.d'

const Posts: NextPage<{ post: Post }> = ({ post }) => {
  return (post && Object.keys(post).length ? <div><h1 >{post.title}</h1>
    <span >{post.body}</span></div> : <h1 >NOT FOUND</h1>
  )
};

//This function gets called at build time
export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  //console.log(params)
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const result: Post = await res.json()
  return {
    props: {
      post: result
    }
  }
}

//This function gets called at build time
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await res.json()
  const paths = posts.map((post: Post) => ({
    params: {
      id: String(post.id)
    }
  }))
  return { paths, fallback: true }
}

export default Posts