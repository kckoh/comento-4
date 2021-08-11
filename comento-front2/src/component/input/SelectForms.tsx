interface Props {
  setSelectedOption: any
  setRequest: any
}

const SelectForms = ({ setSelectedOption, setRequest }: Props) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value)
    setRequest({ id: '', title: '', content: '' })
    console.log(e.target.value)
  }
  return (
    <select onChange={handleSelect}>
      <option value="Register">Register</option>
      <option value="Update">Update</option>
    </select>
  )
}

export default SelectForms
