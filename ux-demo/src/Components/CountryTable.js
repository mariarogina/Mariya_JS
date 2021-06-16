import React from "react";
import { useState, useEffect } from "react";

function createData(name, capital, population) {
  return { name, capital, population };
}



export default function CountryTable() {
  const [countryApiList, setList] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setList(data);
      });
  }, []);

  if (!countryApiList){
    return <div>Still Loading</div>;
  }

  const rows = countryApiList.slice(20, 35).map((item) =>
  createData(item.name, item.capital, item.population)
);

  return (
    <div >
   <h1 style = {{color:"#ab0075"}}>The Table of Countries</h1>
      <table
        className="table"
        style={{ color: "inherit",  }}
      >
        <thead>
          <tr>
            <th scope="col" align="center">
              No.
            </th>
            <th scope="col" align="center">
              Name
            </th>
            <th scope="col" align="center">
              Capital
            </th>
            <th scope="col" align="center">
              Population
            </th>
            
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={row.name}>
              <th scope="row">{index}</th>

              <td align="center">{row.name}</td>
              <td align="center">{row.capital}</td>
              <td align="center">{row.population}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
