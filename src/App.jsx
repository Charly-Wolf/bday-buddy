import { useState } from 'react'
import data from './data'
import PeopleList from './components/PeopleList'

const App = () => {
  const [people, setPeople] = useState(data)
  const clearList = () => {
    setPeople([])
  }

  return (
    <section className='container'>
      <h3>{people.length} Birthdays Today</h3>
      <PeopleList people={people} />
      <button onClick={clearList} className='btn'>
        Clear All
      </button>
    </section>
  )
}
export default App
