import React, { useState } from 'react'
import axios, { AxiosError } from 'axios'
import PutForms from './PutForms'
import PostForms from './PostForms'
import SelectForms from './SelectForms'
interface PostRequest {
  id?: string
  title: string
  content: string
}

const Input = () => {
  let postReqeust: PostRequest = { title: '', content: '' }
  const [request, setRequest] = useState(postReqeust)
  const [selectedOption, setSelectedOption] = useState('Register')

  const handleChange = (data: any) => {
    const value = data.target.value
    const id = data.target.id

    setRequest({
      ...request,
      [id]: value
    })
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value)
    setRequest({ id: '', title: '', content: '' })
    console.log(e.target.value)
  }

  return (
    <div>
      {/* <select onChange={handleSelect}>
        <option value="Register">Register</option>
        <option value="Update">Update</option>
      </select> */}
      <SelectForms setRequest={setRequest} setSelectedOption={setSelectedOption}></SelectForms>
      {selectedOption === 'Register' ? (
        <PostForms request={request} handleChange={handleChange}></PostForms>
      ) : (
        <PutForms request={request} handleChange={handleChange}></PutForms>
      )}
    </div>
  )
}

export default Input
