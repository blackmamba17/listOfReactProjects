import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')


  const handleChange = (e) => {
    const value = e.target.value

    e.target.id === 'name' ? setName(value) : setEmail(value)

  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div>
      <h2>form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input onChange={handleChange} type="text" id="name" value={name} /> <br />
        <label htmlFor="email">email</label>
        <input onChange={handleChange} type="text" id="email" value={email} /> <br />
        <button type="submit">send the data</button>
      </form>
    </div>
  )
};
export default ControlledInputs;
