import axios, { AxiosError } from 'axios'

interface Props {
  handleChange: any
  request: any
}
interface PostRequest {
  title: string
  content: string
}

const PutForms = ({ handleChange, request }: Props) => {
  const handlePutSubmit = async (id: String) => {
    await axios.put<PostRequest>('post/' + id, request).catch((error: AxiosError) => {
      alert('Error has occured')
    })
  }
  return (
    <form onSubmit={() => handlePutSubmit(request.id)}>
      <input id="id" value={request.id} onChange={handleChange} placeholder="Id"></input>
      <input id="title" value={request.title} onChange={handleChange} placeholder="Title"></input>
      <input id="content" value={request.content} onChange={handleChange} placeholder="Content"></input>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default PutForms
