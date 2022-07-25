import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './../pages/Register';
import Gallery from './../pages/Gallery';
import News from '../pages/News';
import ChartRoom from '../pages/ChartRoom';
import History from '../pages/History';
import PrayerGroup from '../pages/PrayerGroup';

function MainRoutes() {
  return (
    <div className="">
      <Routes>
        <Route path="/register" exact element={<Register />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/chart" element={<ChartRoom />} />
        <Route path="/history" element={<History />} />
        <Route path="/prayer" element={<PrayerGroup />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;