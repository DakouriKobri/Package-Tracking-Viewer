// NPM Packages
import { useState, useEffect } from "react";

// Project files
import DataTable from "./DataTable";

export default function PackageList() {
  // State
  const [status, setStatus] = useState(0); // 0 = loading data, 1 = data loaded, 2 = error;
  const [data, setData] = useState([]);

  // Constants
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // Methods
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => onFetchSuccess(json))
      .catch((error) => onFetchFail(error));
  }, [setData, setStatus]);

  function onFetchSuccess(json) {
    setData(json);
    setStatus(1);
  }

  function onFetchFail(error) {
    console.log("Error", error);
    setStatus(2);
  }

  return (
    <div className="App">
      {/* We use short circuit to simulate a Switch statement */}
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND */}
      {status === 0 && <p>🕓 Loading...</p>}
      {status === 1 && <DataTable data={data} />}
      {status === 2 && <p>🚨 Please check your connection</p>}
    </div>
  );
}










/* export default function List() {
  return (
    <div className="list">
      <h1>Packages</h1>

      {/* Build a table for the package list */
     /*  <table className="list-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Sender</th>
            <th>Status</th>
            <th>Last updated</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Tazz</td>
            <td>Delivered</td>
            <td>2020-09-15T05:51:13Z</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Boobool</td>
            <td>Processed</td>
            <td>2020-09-15T05:51:13Z</td>
          </tr><tr>
            <td>2</td>
            <td>Boobool</td>
            <td>Processed</td>
            <td>2020-09-15T05:51:13Z</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}
 */ 