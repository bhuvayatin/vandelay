import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Box, Chip, Typography } from "@mui/material";

const data = [
    { name: 'Jan', sales: 500, profit: 300 },
    { name: 'Feb', sales: 200, profit: 150 },
    { name: 'Mar', sales: 250, profit: 180 },
    { name: 'Apr', sales: 300, profit: 220 },
    { name: 'May', sales: 280, profit: 210 },
    { name: 'Jun', sales: 450, profit: 330 },
    { name: 'Jul', sales: 400, profit: 310 },
    { name: 'Aug', sales: 350, profit: 270 },
    { name: 'Sep', sales: 380, profit: 290 },
    { name: 'Oct', sales: 300, profit: 240 },
    { name: 'Nov', sales: 450, profit: 360 },
    { name: 'Dec', sales: 470, profit: 380 },
];

function SalesViewChart() {
    return (
        <Box sx={{ width: '100%', height: '100%', p: 0, position: "relative" }}>
            <Typography variant="h6" sx={{
                color: "#2D3748",
                fontSize: "18px",
                marginBottom: 0
            }} fontWeight={600} gutterBottom>
                Sales overview
            </Typography>
            <Chip
                label="in 2021"
                size="small"
                sx={{
                    backgroundColor: "#fff",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#A0AEC0",
                    marginBottom: '10px',
                    padding: '0 2px',
                    '& .MuiChip-label': {
                        padding: 0,
                        '&::before': {
                            content: '"(+5) more"',
                            color: '#48BB78',
                            marginRight: '4px',
                            fontWeight: 600
                        }
                    }
                }}
            />
            <Box sx={{
                width: '100%',
                height: "335px",
                marginTop: "30px",
                '& .recharts-wrapper': {
                    width: '100% !important',
                    position: "absolute",
                    left: "-2%",
                },
                '& .recharts-surface': {
                    width: '100% !important',
                    overflow: 'visible'
                }
            }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 0, left: 0, bottom: 20 }}
                    >
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00C49F" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#00C49F" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="name"
                            axisLine={{ stroke: "#E2E8F0" }}
                            tickLine={false}
                            tick={{
                                fill: "#A0AEC0",
                                fontSize: 12,
                                dy: 10 
                            }}
                            padding={{ left: 10, right: 10 }} 
                        />
                        <YAxis
                            axisLine={{ stroke: "#E2E8F0" }}
                            tickLine={false}
                            tick={{ fill: "#A0AEC0", fontSize: 12 }}
                        />
                        <Tooltip
                            contentStyle={{
                                background: "#FFFFFF",
                                border: "1px solid #E2E8F0",
                                borderRadius: "6px",
                                boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                color: "#2D3748"
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="sales"
                            stroke="#00C49F"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorSales)"
                        />
                        <Area
                            type="monotone"
                            dataKey="profit"
                            stroke="#8884d8"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorProfit)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    );
}

export default SalesViewChart;