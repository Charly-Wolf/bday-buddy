import { useState } from 'react'
import data from './data'
import PeopleList from './components/PeopleList'

const App = () => {
  const [people, setPeople] = useState(data)
  const clearList = () => {
    setPeople([])
  }

  return (
    <>
      <h2>{people.length} Birthdays Today</h2>
      <PeopleList people={people} />
      <button onClick={clearList} className='btn'>
        Clear All
      </button>
    </>
  )
}
export default App
