const Person = ({image, name, age}) => {
  return (
    <>
      <img src={image} style={{ width: '3rem' }} />
      <h3>{name}</h3>
      <p>{age} years</p>
    </>
  )
}
export default Person