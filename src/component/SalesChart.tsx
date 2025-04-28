import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box } from "@mui/material";

const data = [
  { value: 320 },
  { value: 240 },
  { value: 120 },
  { value: 300 },
  { value: 520 },
  { value: 430 },
  { value: 500 },
  { value: 310 },
  { value: 150 },
];

const SalesChart = () => {
  return (
    <Box
      sx={{
        height: "200px",
        background: "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
        paddingTop: 5,
        paddingBottom: 3,
        borderRadius: "8px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap={40}>
          <XAxis 
            axisLine={false} 
            tickLine={false}
            tick={false}
          />
          <YAxis 
            domain={[0, 500]}
            stroke="#fff" 
            axisLine={false} 
            tickLine={false}
            tick={{ fill: '#fff' }}
            ticks={[0, 100, 200, 300, 400, 500]}
          />
          <Tooltip 
            contentStyle={{
              background: "#2E335A",
              border: "1px solid #fff",
              borderRadius: "8px",
              color: "#fff"
            }}
          />
          <Bar 
            dataKey="value" 
            fill="#fff" 
            radius={10} 
            barSize={8} 
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SalesChart;