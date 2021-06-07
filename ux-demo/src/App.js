import './App.css';
import DropDownList from './Components/DropDownList';
import PopupBri from './Components/PopupBri';
import PopupHel from './Components/PopupHel';
import PopupMsc from './Components/PopupMsc';

const countriesList = [
  {name: "Russia", capital: "Moscow", currency: "RUB", language : "russian", img:"https://www.elitetraveler.com/wp-content/uploads/2012/12/RAI5-462x346.jpg"},
  {name: "Finland", capital: "Helsinki", currency: "EUR", language : "Finnish", img: "https://media-cdn.tripadvisor.com/media/photo-s/13/d7/93/fe/helsinki-by-night.jpg"},
  {name: "Great Britain", capital: "London", currency: "GBP", language : "English",img:"https://www.sftrips.com/wp-content/uploads/2016/03/z8888.jpg"}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DropDownList list={countriesList}/>
        <PopupMsc/>
        <PopupHel/>
        <PopupBri/> </header>
    </div>
  );
}

export default App;
