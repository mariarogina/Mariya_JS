import "./App.css";
import DropDownList from "./Components/DropDownList";
import Popup from "./Components/Popup";
import React, { useEffect, useState } from "react";
import DataTable from "./Components/DataTable";
import { countriesList } from "./countriesList";
import SkinChange from "./Components/Skin";

// const popUpList = [
//   {"btnValue" : "Come and visit Moscow", "paragraph" : "Moscow is the Capital of Russia", "title": "Welcome to Moscow", "imgSrc": "https://gkd.ru/assets/i/ai/4/2/8/i/2884202.jpg"},
//   {"btnValue" : "Come and visit Helsinki", "paragraph" : "Helsinki is the Capital of Finland", "title": "Welcome to HEL", "imgSrc": "https://www.likefinland.com/images/artikkelikuvat/helsinki/allas%20sea%20pool1.jpg"},
//   {"btnValue" : "Come and visit London", "paragraph" : "London is the Capital of Great Britain", "title": "Welcome to London", "imgSrc": "https://www.overseasattractions.com/wp-content/uploads/2018/08/london-at-night.jpg"}
// ]

function App() {
  const [popUpList, setPopUpList] = useState([]);
  const [color, setTextColor] = useState("black");
  const [bgColor, setBgColor] = useState("#aadae7");
  let styles = { backgroundColor: bgColor, color: color };

  const changeColor = () => {
    setTextColor(color === "black" ? "#aadae7" : "black");
    setBgColor(bgColor === "#aadae7" ? "#2f384a" : "#aadae7");
  };

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/Greyewi/87daf86f2a2ffe765ce31d68ccf65679/raw/17833e18c22e0da5700d86ed417909e01efc5356/countries1.json"
    )
      .then((data) => data.json())
      .then((dataJson) => {
        setPopUpList(dataJson);
      });
  }, [setPopUpList]);

  return (
    <div style={styles} className="App">
      <header className="App-header">
        <DropDownList list={countriesList} />
        {popUpList.map((item, key) => (
          <Popup data={item} key={key + item.title} />
        ))}
        <DataTable />
        <SkinChange onClick={changeColor} />
      </header>
    </div>
  );
}

export default App;
