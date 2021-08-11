import { useEffect, useState } from 'react'
import axios from 'axios'
import PostBody from './PostBody'
import TableHead from './TableHead'
import { useQuery, QueryClient } from 'react-query'
interface PostResponse {
  id: number
  title: string
  content: string
}

const Posts = () => {
  const [posts, setPosts] = useState<PostResponse[]>()

  // useEffect(() => {
  //   async function getPosts() {
  //     const posts = await axios.get('posts')

  //     setPosts(posts.data)
  //   }
  //   getPosts()
  // }, [])

  const queryInfo = useQuery('post', () => {
    // setPosts(posts.data)
    return axios.get('posts').then((res) => res.data)
  })

  return (
    <div>
      <table>
        <TableHead />
        <tbody>
          {/* {posts ? (
            posts.map((post) => {
              return <PostBody id={post.id} title={post.title} content={post.content}></PostBody>
            })
          ) : (
            <></>
          )} */}
          {queryInfo.data?.map((post: PostResponse) => {
            return <PostBody id={post.id} title={post.title} content={post.content}></PostBody>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Posts
