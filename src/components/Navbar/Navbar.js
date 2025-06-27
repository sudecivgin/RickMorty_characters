import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const navbarStyle = {
    fontFamily: "'source-code-pro', Menlo, Monaco, Consolas, 'Courier New', monospace",
    fontWeight: 'bold',
    backgroundColor: '#ffffff',
    padding: '10px 0',
  };

  const openPortal = () => {
    navigate("/portal");
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container">
        <Link 
          to="/" 
          className="fs-3 navbar-brand brand-logo"
        >
          Rick 🛸 Morty <span className="universe-pink">Universe</span>
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/home" className="nav-link active">🏠 Home</Link>
            <Link to="/episodes" className="nav-link active">🎬 Episodes</Link>
            <Link to="/location" className="nav-link active">🌍 Location</Link>
            <button className="nav-link active" onClick={openPortal}>
              🚪 Open a Portal
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
