import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import { Routes, Route } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader'
import Dashboard from '../dashboardElements/Dashboard';
import News from '../dashboardElements/News';
import Leader from '../dashboardElements/Leaders';
import Community from '../dashboardElements/Community';
import Users from '../dashboardElements/Users';
import Prayer from '../dashboardElements/Prayers';
import Messages from '../dashboardElements/Messages';
import Report from '../dashboardElements/Gallery';
import Lesson from '../dashboardElements/LessonOfDay';

const DashRoutes = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='flex flex-col min-h-screen'>
      <DashboardHeader />
      <SideBar toggle={handleClick} style="hidden lg:flex"/>
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/community" element={<Community />} />
        <Route path="/dashdash" element={<Dashboard />} />
        <Route path="/leader" element={<Leader />} />
        <Route path="/user" element={<Users />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/prayer" element={<Prayer />} />
        <Route path="/report" element={<Report />} />
        <Route path="/lesson" element={<Lesson />} />
      </Routes>
    </div>
  )
}

export default DashRoutes
