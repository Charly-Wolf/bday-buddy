import Person from "./Person"

const PeopleList = ({people}) => {
  return (
    <div style={{ background: 'white', padding: '2rem' }}>
      {people.map(p => {
        return (
          <Person key={p.id} {...p} />
        )
      })}
    </div>
  )
}
export default PeopleList
