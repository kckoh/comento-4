import axios from 'axios'

interface Props {
  id: number
  title: string
  content: string
}

const PostBody = ({ id, title, content }: Props) => {
  const deletePost = async (targetId: any) => {
    const data = await axios.delete('post/' + targetId)
  }
  return (
    <tr>
      <td scope="row"> {id}</td>
      <td>{title}</td>
      <td> {content}</td>
      <td>
        <button onClick={() => deletePost(id)}>Delete</button>
      </td>
    </tr>
  )
}

export default PostBody
