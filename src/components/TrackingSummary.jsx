export default function TrackingSummary(){
    return(
        <div className="tracking-summary">
            <h1>Tracking Summary</h1>

{/* Build table for single package tracking summary */}
<table className="list-table">
  <thead>
    <tr>
      <th colspan="2">Package # 1</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Delivered</td>
      <td>2020-09-15T05:51:13Z</td>
    </tr>
  </tbody>
</table>
        </div>
    );
}