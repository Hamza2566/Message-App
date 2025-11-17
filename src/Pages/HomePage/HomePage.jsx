import { Outlet, Link } from 'react-router-dom';
import './HomePage.module.css'; 

export default function HomePage() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* LEFT SIDE */}
      <div style={{ flex: 1, background: '#4a90e2', color: 'white', padding: 40 }}>
        <h1>Chat App</h1>
        <p>Connect with friends instantly and chat in real time.</p>
      </div>

      {/* RIGHT SIDE */}
      <div style={{ flex: 1, padding: 40 }}>
        {/* Child routes render here */}
        <Outlet />

        {/* Links to switch */}
        <div style={{ marginTop: 20 }}>
          <Link to="/">Sign In</Link> | <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
