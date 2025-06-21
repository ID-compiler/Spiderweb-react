
import { useState } from 'react';
import { Search, Plus, Eye } from 'lucide-react';

interface EventRequestsProps {
  onEventSelect: (event: any) => void;
}

const EventRequests = ({ onEventSelect }: EventRequestsProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const mockEvents = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    eventName: 'Filed Name',
    eventStart: 'Jan 12, 2024',
    eventEnd: 'Jan 14, 2024',
    clientName: 'Muhammad Asad',
    contactInfo: '+1 234 566 7890',
    venue: 'Lorem Ipsum Dolor Sit Amet'
  }));

  const filteredEvents = mockEvents.filter(event =>
    event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEventClick = (event: any) => {
    onEventSelect(event);
  };

  return (
    <div className="event-requests">
      <div className="header">
        <h1>Event Requests</h1>
        <div className="header-actions">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <button className="add-btn">
            <Plus size={20} />
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="events-table">
          <thead>
            <tr>
              <th>Event Name 📋</th>
              <th>Event Start</th>
              <th>Event End 📅</th>
              <th>Client Name 👤</th>
              <th>Contact Info</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event) => (
              <tr key={event.id} onClick={() => handleEventClick(event)} className="event-row">
                <td>
                  <div className="event-name">
                    <Eye className="view-icon" size={16} />
                    {event.eventName}
                  </div>
                </td>
                <td>{event.eventStart}</td>
                <td>{event.eventEnd}</td>
                <td>{event.clientName}</td>
                <td>{event.contactInfo}</td>
                <td>{event.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="pagination-btn">←</button>
        <div className="page-numbers">
          <span className="page-number active">1</span>
          <span className="page-number">2</span>
          <span className="page-number">3</span>
          <span className="page-number">4</span>
        </div>
      </div>
    </div>
  );
};

export default EventRequests;
