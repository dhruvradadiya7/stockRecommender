import "./RecoTable.css";
const RecoTable = (props) => {
  return (
    <center>
      <table>
        <thead>
          <tr>
            <th className="index">Index</th>
            <th>Date</th>
            <th>Stock Symbol</th>
            <th>Price</th>
            <th>Media Count</th>
            <th>Recommendation</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((oneDayData, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{`${oneDayData.date.getDate()} / ${oneDayData.date.getMonth()} / ${oneDayData.date.getFullYear()}`}</td>
                <td>{props.stock.toUpperCase()}</td>
                <td>${oneDayData.price}</td>
                <td>{oneDayData.socialMediaCount.reduce(function(acc, val) { return acc + val; }, 0)}</td>
                <td
                  className={`${oneDayData.action === "Sell" && "sell"} ${
                    oneDayData.action === "Buy" && "buy"
                  }`}
                >
                  <strong>{oneDayData.action}</strong>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {!props.data && <h2>Enter Stock Symbol and search recommendation.</h2>}
    </center>
  );
};

export default RecoTable;
