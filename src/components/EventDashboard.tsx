
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import EventRequests from './EventRequests';
import EventDetails from './EventDetails';
import './EventDashboard.css';

const EventDashboard = () => {
  const [currentView, setCurrentView] = useState('event-requests');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventSelect = (event: any) => {
    setSelectedEvent(event);
    setCurrentView('event-details');
  };

  const handleBackToRequests = () => {
    setCurrentView('event-requests');
    setSelectedEvent(null);
  };

  return (
    <div className="event-dashboard">
      <div className="background-animation"></div>
      <div className="dashboard-container">
        <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
        <div className="main-content">
          {currentView === 'event-requests' && (
            <EventRequests onEventSelect={handleEventSelect} />
          )}
          {currentView === 'event-details' && (
            <EventDetails event={selectedEvent} onBack={handleBackToRequests} />
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDashboard;
