import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: 250, background: '#f0f0f0', padding: 20 }}>
        <h3>Friends List</h3>
        <ul>
          <li>Friend 1</li>
          <li>Friend 2</li>
        </ul>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: 20 }}>
        <Outlet /> {/* DashboardHome or ChatWindow */}
      </div>
    </div>
  );
}
