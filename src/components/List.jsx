export default function List() {
  return (
    <div className="list">
      <h1>Packages</h1>

      {/* Build a table for the package list */}
      <table className="list-table">
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
