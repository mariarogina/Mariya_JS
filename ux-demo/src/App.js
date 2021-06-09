import './App.css';
import DropDownList from './Components/DropDownList';
import Popup from './Components/Popup';
import React, {useEffect, useState} from "react"

const countriesList = [
  {name: "Russia", capital: "Moscow", currency: "RUB", language : "russian", img:"https://www.elitetraveler.com/wp-content/uploads/2012/12/RAI5-462x346.jpg"},
  {name: "Finland", capital: "Helsinki", currency: "EUR", language : "Finnish", img: "https://media-cdn.tripadvisor.com/media/photo-s/13/d7/93/fe/helsinki-by-night.jpg"},
  {name: "Great Britain", capital: "London", currency: "GBP", language : "English",img:"https://www.sftrips.com/wp-content/uploads/2016/03/z8888.jpg"}
]

// const popUpList = [
//   {"btnValue" : "Come and visit Moscow", "paragraph" : "Moscow is the Capital of Russia", "title": "Welcome to Moscow", "imgSrc": "https://gkd.ru/assets/i/ai/4/2/8/i/2884202.jpg"},
//   {"btnValue" : "Come and visit Helsinki", "paragraph" : "Helsinki is the Capital of Finland", "title": "Welcome to HEL", "imgSrc": "https://www.likefinland.com/images/artikkelikuvat/helsinki/allas%20sea%20pool1.jpg"},
//   {"btnValue" : "Come and visit London", "paragraph" : "London is the Capital of Great Britain", "title": "Welcome to London", "imgSrc": "https://www.overseasattractions.com/wp-content/uploads/2018/08/london-at-night.jpg"}
// ]

function App() {
  const [popUpList, setPopUpList] = useState([])


  useEffect(() => {

    fetch('https://gist.githubusercontent.com/Greyewi/87daf86f2a2ffe765ce31d68ccf65679/raw/17833e18c22e0da5700d86ed417909e01efc5356/countries1.json')
      .then((data) => data.json())
      .then((dataJson) => {
        setPopUpList(dataJson)
      })

  }, [setPopUpList])

  return (
    <div className="App">
      <header className="App-header">
        <DropDownList list={countriesList}/>
        {popUpList.map((item, key) => <Popup data={item} key={key + item.title}/>)}

      </header>
    </div>
  );
}

export default App;
