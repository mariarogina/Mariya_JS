import React from "react";
import { countriesList } from "../countriesList";

function createData(name, capital, language, currency) {
  return { name, capital, language, currency };
}

const rows = countriesList.map((item) =>
  createData(item.name, item.capital, item.language, item.currency)
);


export default function DataTable() {
  return (
    <div>
      <table className="table" style={{ color: "inherit", borderColor: 'green', }}>
        <thead >
          <tr>
            <th  scope="col" align="right">
              No.
            </th>
            <th  scope="col" align="right">
              Name
            </th>
            <th  scope="col" align="right">
              Capital
            </th>
            <th  scope="col" align="right">
              Language
            </th>
            <th scope="col" align="right">
              Currency
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={row.name}>
              <th scope="row">{index}</th>

              <td align="right">{row.name}</td>
              <td align="right">{row.capital}</td>
              <td align="right">{row.language}</td>
              <td align="right">{row.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
