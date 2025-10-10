import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


const RatingChart = ({ ratings }) => {
  if (!ratings || ratings.length === 0) return null;

  const chartData = ratings.map((r) => ({
    name: r.name,
    count: r.count,
  }));
  

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-lg font-bold mb-2 md:mb-4 text-[#001931]">Ratings Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          layout="vertical"   // horizontal bars
          margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip formatter={(value) => value.toLocaleString()} />
          {chartData.map((entry) => (
            <Bar
              key={entry.name}
              dataKey="count"
              data={[entry]}
              fill="#ff8811"
              barSize={25}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
