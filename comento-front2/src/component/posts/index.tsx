import { useEffect, useState } from 'react'
import axios from 'axios'
import PostBody from './PostBody'
import TableHead from './TableHead'
import { useQuery, QueryClient } from 'react-query'
import '../../index'
interface PostResponse {
  id: number
  title: string
  content: string
}

const Posts = () => {
  const queryInfo = useQuery('post', () => {
    // setPosts(posts.data)
    return axios.get('posts').then((res) => res.data)
  })

  return (
    <div className="container">
      <div>
        <ul className="career_menu">
          <li>
            <a href="">All</a>
          </li>
          <li>
            <a href="">Entry</a>
          </li>
          <li>
            <a href="">Experienced</a>
          </li>
          <li>
            <a href="">Intern</a>
          </li>
        </ul>
      </div>
      <div>
        <form action=""></form>
      </div>

      <table>
        <TableHead />
        <tbody>
          {queryInfo.data?.map((post: PostResponse) => {
            return <PostBody id={post.id} title={post.title} content={post.content}></PostBody>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Posts
