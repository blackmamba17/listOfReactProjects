import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)

  const handleChange = (e) => {
    const newName = e.target.value
    setName(newName)
    console.log(newName);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople([...people, { id: people.length + 1, name }])
    console.log(people);

  }

  const removeUser = (name) => {
    setPeople(people.filter((person) => {
      return person.name != name
    }))
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input onChange={handleChange} type='text' className='form-input' id='name' value={name} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {people.map((person, index) => {
        return (<>
          <h4 key={'h4' + index}>{person.name}</h4>
          <button onClick={() => {
            removeUser(person.name)
          }} className='btn btn-block'>remove</button>
        </>)
      })}
    </div>
  );
};
export default UserChallenge;
