
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
          <div className="search-container hover-glow">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <button className="add-btn hover-glow">
            <Plus size={20} />
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="events-table ">
          <thead>
            <tr>
              <th className='hover-glow'>Event Name 📋</th>
              <th className='hover-glow'>Event Start</th>
              <th className='hover-glow'>Event End 📅</th>
              <th className='hover-glow'>Client Name 👤</th>
              <th className='hover-glow'>Contact Info</th>
              <th className='hover-glow'>Venue</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event) => (
              <tr key={event.id} onClick={() => handleEventClick(event)} className="event-row">
                <td className='hover-glow'>
                  <div className="event-name">
                    <Eye className="view-icon" size={16} />
                    {event.eventName}
                  </div>
                </td>
                <td className='hover-glow'>{event.eventStart}</td>
                <td className='hover-glow'>{event.eventEnd}</td>
                <td className='hover-glow'>{event.clientName}</td>
                <td className='hover-glow'>{event.contactInfo}</td>
                <td className='hover-glow'>{event.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination ">
        <button className="pagination-btn hover-glow">←</button>
        <div className="page-numbers ">
          <span className="page-number active hover-glow">1</span>
          <span className="page-number hover-glow">2</span>
          <span className="page-number hover-glow">3</span>
          <span className="page-number hover-glow">4</span>
        </div>
      </div>
    </div>
  );
};

export default EventRequests;
