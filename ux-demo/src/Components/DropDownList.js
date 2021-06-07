import {useState} from 'react'


const DropDownList = ({list}) => {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <div >
      {list && list.map((item, key) => <div key={key}>
          <div className = "countryname" onClick={() => setActiveItem(activeItem === key ? null : key)}>{item.name}</div>
          {key === activeItem && <span className = "countrydrop">
            <br/> capital - {item.capital},
            <br/> currency - {item.currency},
            <br/> language - {item.language}
            <img src={item.img} alt={item.capital}></img>
          </span>}
        </div>
      )}
    </div>
  )
}

export default DropDownList