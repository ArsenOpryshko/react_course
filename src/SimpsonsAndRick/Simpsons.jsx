const Simpsons = (props) => {
    const { name, surname, age, info, photo} = props
  return (
      <div>
          <p>Імʼя: {name}</p>
          <p>Прізвище: {surname}</p>
          <p>Вік: {age}</p>
          <p>Інформація: {info}</p>
          <img src={photo}/>
          <hr/>
      </div>
  )
}
export default Simpsons;