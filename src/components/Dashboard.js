import React from 'react';
import DashBoardGrid from './DashBoardGrid';
import TranscationChart from './TranscationChart';
import BuyerProfileChart from './BuyerProfileChart';
import RecentOrder from './RecentOrder';

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4 w-full h-full'>
      <DashBoardGrid />
      <div className='flex flex-row gap-4 w-full'>
        <TranscationChart />
        <BuyerProfileChart />
      </div>
      <div className='flex flex-row gap-4 w-full'>
        <RecentOrder />
      </div>
    </div>
  )
}

export default Dashboard;
