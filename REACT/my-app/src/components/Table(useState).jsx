import React, { useState } from "react";
import "./Table.css";
function Table() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John Doe</td>
            <td>30</td>
            <td>New York</td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => setShow(!show)}>
        Hide/Show
      </button>
    </div>
  );
}

export default Table;