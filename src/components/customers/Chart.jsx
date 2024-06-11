import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Best Sales',
      data: [5, 20, 5, 30, 15, 20, 55, 34, 45, 30, 50, 60],
      borderColor: '#64b5f6',
      fill: false,
      tension: 0.4, 
    },
    {
      label: 'Best Product',
      data: [10, 15, 10, 20, 30, 25, 35, 30, 45, 40, 55, 50],
      borderColor: 'grey',
      fill: false,
      tension: 0.4,
    },
  ],
};

const SalesChart = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>Total Sales</Typography>
        <Box>
          <Line data={data} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
