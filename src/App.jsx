import { useState } from 'react'
import data from './data'
import PeopleList from './components/PeopleList'

const App = () => {
  const [people, setPeople] = useState(data)
  const clearList = () => {
    setPeople([])
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <PeopleList people={people} />
        <button type='button' onClick={clearList} className='btn btn-block'>
          Clear All
        </button>
      </section>
    </main>
  )
}
export default App
