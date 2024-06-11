import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { AccountBalanceOutlined, AttachMoneyOutlined, PeopleAltOutlined, ShoppingCartCheckoutOutlined, TaskAltOutlined, TrendingUpOutlined } from '@mui/icons-material';

ChartJS.register(...registerables);

const sampleData = {
  sales: 100000,
  profit: 50000,
  orders: 1200,
  income: 80000,
  customers: 300,
  delivered: 1150,
  salesData: [65, 59, 80, 81, 56, 55, 40],
  profitData: [28, 48, 40, 19, 86, 27, 90],
};

const Dashboard = () => {
  const [timePeriod, setTimePeriod] = useState('week'); // State to store the selected time period

  const lineChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Sales',
        data: sampleData.salesData,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'blue',
        tension: 0.4,
      },
      {
        label: 'Profit',
        data: sampleData.profitData,
        fill: false,
        backgroundColor: 'rgba(153,102,255,0.4)',
        borderColor: 'rgrey',
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Orders',
        data: [65, 59, 80, 81, 56, 55, 40, 60, 68, 55, 64, 85],
        backgroundColor: 'grey',
        borderColor: 'blue',
        borderWidth: 1,
      },
    ],
  };

  // Function to handle time period change
  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
    // You can fetch data based on the selected time period here and update the chart data accordingly
  };

  return (
    <Container style={{ paddingTop: '20px', width: '100%', maxWidth: '100vw', height: '100vh' }}>
      <Typography variant="h5" style={{ marginBottom: '10px', fontWeight: 'bold', color: 'blue' }}>Analytics Dashboard</Typography>
      <Grid container spacing={3} style={{ height: '100%' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" style={{ height: '100%', backgroundColor: '#f0f4f8', border: '1px solid #e0e0e0' }}>
            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
              <AttachMoneyOutlined style={{ fontSize: 50, marginRight: '10px', color:'grey' }} />
              <div>
                <Typography variant="h5" style={{ marginBottom: '10px' }}>Total Sales</Typography>
                <Typography variant="h4" style={{ fontWeight: 'bold' }}>${sampleData.sales}</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" style={{ height: '100%', backgroundColor: '#f0f4f8', border: '1px solid #e0e0e0' }}>
            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
              <TrendingUpOutlined style={{ fontSize: 50, marginRight: '20px', color:'grey' }} />
              <div>
                <Typography variant="h5" style={{ marginBottom: '10px' }}>Total Profit</Typography>
                <Typography variant="h4" style={{ fontWeight: 'bold' }}>${sampleData.profit}</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" style={{ height: '100%', backgroundColor: '#f0f4f8', border: '1px solid #e0e0e0' }}>
            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
              <ShoppingCartCheckoutOutlined style={{ fontSize: 40, marginRight: '10px', color:'grey' }} />
              <div>
                <Typography variant="h5" style={{ marginBottom: '10px' }}>Total Orders</Typography>
                <Typography variant="h4" style={{ fontWeight: 'bold' }}>{sampleData.orders}</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" style={{ height: '100%', backgroundColor: '#f0f4f8', border: '1px solid #e0e0e0' }}>
            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
              <AccountBalanceOutlined style={{ fontSize: 40, marginRight: '10px', color:'grey' }} />
              <div>
                <Typography variant="h5" style={{ marginBottom: '10px' }}>Income</Typography>
                <Typography variant="h4" style={{ fontWeight: 'bold' }}>${sampleData.income}</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" style={{ height: '100%', backgroundColor: '#f0f4f8', border: '1px solid #e0e0e0' }}>
            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
              <PeopleAltOutlined style={{ fontSize: 40, marginRight: '20px', color:'grey' }} />
              <div>
                <Typography variant="h5" style={{ marginBottom: '10px' }}>Customers</Typography>
                <Typography variant="h4" style={{ fontWeight: 'bold' }}>{sampleData.customers}</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" style={{ height: '100%', backgroundColor: '#f0f4f8', border: '1px solid #e0e0e0' }}>
            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
              <TaskAltOutlined style={{ fontSize: 40, marginRight: '20px', color:'grey' }} />
              <div>
                <Typography variant="h5" style={{ marginBottom: '10px' }}>Complete Orders</Typography>
                <Typography variant="h4" style={{ fontWeight: 'bold' }}>{sampleData.delivered}</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card variant="outlined" style={{ height: '100%', backgroundColor: '#ffffff', border: '1px solid #e0e0e0' }}>
            <CardContent>
              <Typography variant="h5" style={{ marginBottom: '10px' }}>Sales and Profit Over Time</Typography>
              <FormControl variant="outlined" style={{ marginBottom: '20px' }}>
                <InputLabel id="time-period-select-label">Period</InputLabel>
                <Select
                  labelId="time-period-select-label"
                  id="time-period-select"
                  value={timePeriod}
                  onChange={handleTimePeriodChange}
                  label="Time Period"
                >
                  <MenuItem value="week">Week</MenuItem>
                  <MenuItem value="month">Month</MenuItem>
                  <MenuItem value="year">Year</MenuItem>
                </Select>
              </FormControl>
              <Line data={lineChartData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card variant="outlined" style={{ height: '100%', backgroundColor: '#ffffff', border: '1px solid #e0e0e0' }}>
            <CardContent>
              <Typography variant="h5" style={{ marginBottom: '10px' }}>Orders Over Time</Typography>
              <FormControl variant="outlined" style={{ marginBottom: '20px' }}>
                <InputLabel id="time-period-select-label">Period</InputLabel>
                <Select
                  labelId="time-period-select-label"
                  id="time-period-select"
                  value={timePeriod}
                  onChange={handleTimePeriodChange}
                  label="Time Period"
                >
                  <MenuItem value="week">Week</MenuItem>
                  <MenuItem value="month">Month</MenuItem>
                  <MenuItem value="year">Year</MenuItem>
                </Select>
              </FormControl>
              <Bar data={barChartData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
