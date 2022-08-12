import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = (props) => {
  if (!props.data) {
    return <h2>Enter Data</h2>;
  }
  //option for the charts
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  //data for the price vs socialmedia count
  const data = {
    labels: props.data.map((data, index) => index + 1),
    datasets: [
      {
        label: "Price",
        data: props.data.map((dataitem) => dataitem.price),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "SocialMedia Count",
        data: props.data.map((dataitem) =>
          dataitem.socialMediaCount.reduce(function (acc, val) {
            return acc + val;
          }, 0)
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  //data for second chart to compare trends in social media
  const secondData = {
    labels: props.data.map((data, index) => index + 1),
    datasets: [
      {
        label: "Twitter",
        data: props.data.map((dataitem) => dataitem.socialMediaCount[0]),
        borderColor: "rgb(20, 194, 210)",
        backgroundColor: "rgba(20, 194, 210, 0.5)",
      },
      {
        label: "Reddit",
        data: props.data.map((dataitem) => dataitem.socialMediaCount[1]),
        borderColor: "rgb(225, 29, 29)",
        backgroundColor: "rgba(225, 29, 29, 0.5)",
      },

      {
        label: "Quora",
        data: props.data.map((dataitem) => dataitem.socialMediaCount[2]),
        borderColor: "rgb(167, 207, 11)",
        backgroundColor: "rgba(167, 207, 11, 0.5)",
      },
      {
        label: "Facebook",
        data: props.data.map((dataitem) => dataitem.socialMediaCount[3]),
        borderColor: "rgb(27, 4, 234)",
        backgroundColor: "rgba(27, 4, 234, 0.5)",
      },
    ],
  };
  return (
    <div>
      {props.data ? ( <div>
        <Line width={200} height={100} options={options} data={data} />
        <Line width={200} height={100} options={options} data={secondData} /> </div>
      ) : (
        <h2>Enter Data</h2>
      )}
    </div>
  );
};

export default Chart;
