import{
 LineChart,
 Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

const data = [
    { name: "Mon", km: 10 },
    { name: "Tue", km: 20 },
    { name: "Wed", km: 15 },
    { name: "Thu", km: 25 },
    { name: "Fri", km: 30 },
    { name: "Sat", km: 5 },
    { name: "Sun", km: 0 },
];

function Chart() {
    return (
      <div className="chart-container">
  <h3>KM per week</h3>
  <div className="chart-wrapper">
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="km" stroke="#4f46e5" />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>
    );
}

export default Chart;