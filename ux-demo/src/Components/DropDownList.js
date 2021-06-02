import {useState} from 'react'


const DropDownList = ({list}) => {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <div>
      {list && list.map((item, key) => <div key={key}>
          <div onClick={() => setActiveItem(activeItem === key ? null : key)}>{item.name}</div>
          {key === activeItem && <span>
            <br/> capital - {item.capital},
            <br/> currency - {item.currency},
            <br/> language - {item.language}
          </span>}
        </div>
      )}
    </div>
  )
}

export default DropDownList