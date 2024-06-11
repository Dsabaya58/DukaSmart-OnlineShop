import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import SalesChart from '../components/customers/Chart';
import StatCard from '../components/customers/Card';
import Messages from '../components/customers/Message';

const MainContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  padding: 0,
  margin: 0,
});

const ContentContainer = styled(Container)({
  flexGrow: 1,
  padding: '20px',
});

const RowContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '20px',
  marginBottom: '20px',
});

const ColumnContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

function Reports() {
  return (
    <MainContainer>
      <ContentContainer maxWidth={false}>
        <Typography variant="h4" gutterBottom>
          Reports Dashboard
        </Typography>
        <RowContainer>
          <Box flex={3}>
            <SalesChart />
          </Box>
          <ColumnContainer flex={3}>
            <StatCard title="Total Earnings" value="$3,000.00" percentage="10%" color="#4caf50" />
            <StatCard title="Total Orders" value="$2,750.00" percentage="6%" color="#ff9800" />
            <StatCard title="Total Ratings" value="6.5%" percentage="7%" color="#f44336" />
          </ColumnContainer>
        </RowContainer>
        <Box mt={3}>
          <Messages />
        </Box>
      </ContentContainer>
    </MainContainer>
  );
}

export default Reports;
