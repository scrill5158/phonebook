import { useState } from 'react'

const Name = (props) => {
  <p>{props.name}</p>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }
  
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div> {persons.map(name =>
          <Name key={name.id} name={name} />
        )}</div>
    </div>
  )
}

export default App
