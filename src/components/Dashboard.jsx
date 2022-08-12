import RecoTable from "./RecoTable";
import useRecommendation from "../utils/useRecommendation";
import Chart from "./Chart";
const Dashboard = (props) => {
    const recommendedData = useRecommendation(props.stockData)
  return (
    <div className="dashboard">
    <div className="graph">
     <Chart data={props.stockData}/>
    </div>
    <div>
    <RecoTable data={recommendedData} stock={props.stockName} />
    </div> 
  </div>
  );
};

export default Dashboard;
