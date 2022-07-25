import React from 'react'
import SideBar from '../components/SideBar'
import { Routes, Route } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader'
import Dashboard from '../dashboardElements/Dashboard';
import News from '../dashboardElements/News';
import History from '../dashboardElements/History';
import Community from '../dashboardElements/Community';
import Leaders from '../dashboardElements/Leaders';
import Prayer from '../dashboardElements/Prayers';
import Messages from '../dashboardElements/Messages';
import Report from '../dashboardElements/Report';
import Lesson from '../dashboardElements/LessonOfDay';

const DashRoutes = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <DashboardHeader />
      <SideBar />
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/community" element={<Community />} />
        <Route path="/dashdash" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/leader" element={<Leaders />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/prayer" element={<Prayer />} />
        <Route path="/report" element={<Report />} />
        <Route path="/lesson" element={<Lesson />} />
      </Routes>
    </div>
  )
}

export default DashRoutes
