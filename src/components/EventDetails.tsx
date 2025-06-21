
import { useState } from 'react';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';

interface EventDetailsProps {
  event: any;
  onBack: () => void;
}

const EventDetails = ({ event, onBack }: EventDetailsProps) => {
  const [activeTab, setActiveTab] = useState('assign-coordinator');
  const [selectedCoordinator, setSelectedCoordinator] = useState('');
  const [eventName, setEventName] = useState('Event Name');
  const [venueAddress, setVenueAddress] = useState('Some Location 12, Name Here, City, State');

  const tabs = [
    { id: 'event-details', label: 'Event Details' },
    { id: 'assign-coordinator', label: 'Assign Coordinator/Coordinators' },
    { id: 'session-management', label: 'Session Management' },
    { id: 'generate-sow', label: 'Generate SOW' }
  ];

  const meetingRooms = [
    { name: 'Meeting Room 1', positions: 12, status: 'active' },
    { name: 'Meeting Room 2', positions: 0, status: 'inactive' },
    { name: 'Meeting Room 3', positions: 10, status: 'active' },
    { name: 'Meeting Room 4', positions: 10, status: 'active' },
    { name: 'Meeting Room 5', positions: 10, status: 'active' }
  ];

  const positions = [
    { camera: 'Camera 1 (Wired)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
    { camera: 'Camera 1 (Wired)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
    { camera: 'Camera 1 (Wired)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
    { camera: 'Camera 1 (Wired)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
    { camera: 'Camera 1 (Wired)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
    { camera: 'Camera 1 (Wired)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 }
  ];

  return (
    <div className="event-details ">
      <div className="event-header ">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
        </button>
        <h1 className=' hover-glow '>Event Name <span className="venue-details">(Venue Details)</span></h1>
      </div>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content ">
        {activeTab === 'assign-coordinator' && (
          <div className="assign-coordinator">
            <div className=" coordinator-section">
              <h3>Assign Coordinator</h3>
              <select 
                className="coordinator-select  hover-glow"
                value={selectedCoordinator}
                onChange={(e) => setSelectedCoordinator(e.target.value)}
              >
                <option value="">Search Coordinator</option>
                <option value="coordinator1">John Doe</option>
                <option value="coordinator2">Jane Smith</option>
              </select>
              <button className="add-coordinator-btn">Add New Coordinator</button>
            </div>

            <div className="event-info-section">
              <div className="event-name-input">
                <label>Event Name (Venue Here)</label>
                <div className="input-group">
                  <input className='hover-glow'
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                  />
                  <span className="hover-glow date-range">Start 12-12-2023</span>
                  <span className="hover-glow end-date">Ends 15-12-2023</span>
                </div>
              </div>
              <div className="venue-address ">
                <label>Venue Address</label>
                <input className=' hover-glow'
                  type="text"
                  value={venueAddress}
                  onChange={(e) => setVenueAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="assign-contractor">
              <h3>Assign Contractor</h3>
              <div className="contractor-layout">
                <div className="meeting-rooms ">
                  {meetingRooms.map((room, index) => (
                    <div key={index} className={`meeting-room  hover-glow ${room.status}`}>
                      <div className="room-header">
                        <h4>{room.name}</h4>
                        <span className="positions-count">
                          {room.positions > 0 ? `${room.positions} Positions` : '0 Positions'}
                        </span>
                      </div>
                      {room.positions > 0 && (
                        <div className="room-details">
                          <p>Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className=" positions-table">
                  <h4>Positions</h4>
                  <table className=' hover-glow '>
                    <thead>
                      <tr>
                        <th>Position</th>
                        <th>Time</th>
                        <th>Info</th>
                        <th>Quantity</th>
                        <th>Select Contractor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {positions.map((position, index) => (
                        <tr key={index}>
                          <td>{position.camera}</td>
                          <td>{position.time}</td>
                          <td>{position.info}</td>
                          <td>{position.quantity}</td>
                          <td>
                            <select className="contractor-select">
                              <option>Select Contractor</option>
                              <option>Contractor 1</option>
                              <option>Contractor 2</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="pagination">
              <button className="pagination-btn">←</button>
              <div className="page-numbers">
                <span className="page-dot"></span>
                <span className="page-dot active"></span>
                <span className="page-dot"></span>
              </div>
            </div>

            <button className="hover-glow save-btn">Save Edits</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
