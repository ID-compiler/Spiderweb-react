import { Users, Calendar, MapPin, User, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const Sidebar = ({ currentView, setCurrentView }: SidebarProps) => {
  const menuItems = [
    { id: 'new-requests', label: 'New Requests', icon: Calendar, count: null },
    { id: 'estimate', label: 'Estimate', icon: Calendar, active: true },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'partial-requests', label: 'Partial Requests', icon: Calendar },
    { id: 'positions', label: 'Positions', icon: MapPin },
    { id: 'contractors', label: 'Contractors', icon: Users },
    { id: 'users', label: 'Users', icon: Users, expandable: true, expanded: true },
    { id: 'admins', label: 'Admins', icon: User, nested: true },
    { id: 'clients', label: 'Clients', icon: User, nested: true },
    { id: 'coordinators', label: 'Coordinators', icon: User, nested: true },
    { id: 'profile', label: 'Profile', icon: Settings }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <span>B</span>
          </div>
        </div>
      </div>

      <div className="sidebar-content">
        <div className="menu-section">
          <div className="menu-title">Events</div>
          <div className="menu-items">
            {menuItems.slice(0, 4).map((item) => (
              <div 
                key={item.id} 
                className={`menu-item hover-glow ${item.active ? 'active' : ''}`}
                onClick={() => setCurrentView(item.id)}
              >
                <item.icon className="menu-icon" size={16} />
                <span>{item.label}</span>
                {item.active && <div className="active-indicator" />}
              </div>
            ))}
          </div>
        </div>

        <div className="menu-items">
          {menuItems.slice(4, 6).map((item) => (
            <div 
              key={item.id} 
              className="menu-item hover-glow"
              onClick={() => setCurrentView(item.id)}
            >
              <item.icon className="menu-icon" size={16} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="menu-section">
          <div className="menu-item expandable hover-glow">
            <Users className="menu-icon" size={16} />
            <span>Users</span>
            <div className="expand-icon">^</div>
          </div>
          <div className="nested-items">
            {menuItems.slice(7, 10).map((item) => (
              <div 
                key={item.id} 
                className="menu-item nested"
                onClick={() => setCurrentView(item.id)}
              >
                <item.icon className="menu-icon" size={16} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-item hover-glow">
          <Settings className="menu-icon" size={16} />
          <span>Profile</span>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">
            <span>S</span>
            <div className="user-count">2</div>
          </div>
        </div>
        <div className="logout-btn">
          <LogOut className="menu-icon" size={16} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
