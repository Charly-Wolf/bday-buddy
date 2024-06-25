import Person from "./Person"

const PeopleList = ({people}) => {
  return (
    <section>
      {people.map(p => {
        return (
          <Person key={p.id} {...p} />
        )
      })}
    </section>
  )
}
export default PeopleList
