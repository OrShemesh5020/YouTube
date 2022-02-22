import type { GetStaticProps, NextPage } from 'next'
import {Post } from './../models/Post.d';
const Posts: NextPage<{posts:Post[]}>= ({posts}) => { 
    return (
        <div>
            {posts.map((post:Post)=>(
                <>
                <div key={post.id}>
                    <h1 >{post.title}</h1>
                    <span >{post.body}</span>
                </div>
                <br/>
                </>
            ))}
        </div>
    )
}

export const getStaticProps: GetStaticProps= async() => {
    const res= await fetch('https://jsonplaceholder.typicode.com/posts')
    const result:Post[]= await res.json()
    return {
        props:{
            posts:result
        }
    }
}

export default Posts