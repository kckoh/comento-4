import axios, { AxiosError } from 'axios'

interface Props {
  handleChange: any
  request: any
}

interface PostRequest {
  title: string
  content: string
}

const PostForms = ({ handleChange, request }: Props) => {
  const handlePostSubmit = async () => {
    const data = await axios.post<PostRequest>('post', request)
  }
  return (
    <form onSubmit={handlePostSubmit}>
      <input id="title" value={request.title} onChange={handleChange} placeholder="Title"></input>
      <input id="content" value={request.content} onChange={handleChange} placeholder="Content"></input>

      <input type="submit" value="Submit" />
    </form>
  )
}

export default PostForms
