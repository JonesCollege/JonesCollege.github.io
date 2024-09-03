import React from 'react';
import Nav from './components/navbar/Nav'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import OWeek from './components/pages/oweek/O-Week';
import Ateam from './components/pages/community/Ateam';
import Associatesalumni from './components/pages/community/Associatesalumni'
import Studentgov from './components/pages/community/Studentgov'
import BeerBikeTraditionsPage from "./components/pages/beerbike-traditions/BeerBikeTraditionsPage";
import PeerResources from './components/pages/resources/PeerResources';
import CalendarMobile from './components/calendar/CalendarMobile';
import RoomReservation from './components/pages/roomreservation/RoomReservation';
import PrivacyPolicyPage from './components/PrivacyPolicy';


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/o-week' exact element={<OWeek />} />
          <Route path='/studentgov' exact element={<Studentgov />} />
          <Route path='/ateam' exact element={<Ateam />} />
          <Route path='/associates-alumni' exact element={<Associatesalumni />} />
          <Route path="/beerbike-traditions" exact element={<BeerBikeTraditionsPage />}/>
          <Route path='/resources' exact element={<PeerResources />} />          
          <Route path='/calendar' exact element={<CalendarMobile />} />
          <Route path='/reserve-room' exact element={<RoomReservation />} />
          <Route path='/privacy-policy' exact element={<PrivacyPolicyPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
