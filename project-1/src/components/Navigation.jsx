import '../../src/App.css'

const Navigation = () => {
  
  return (
    <nav className="container">
      <div className="logo">
        <h1>Books.<span>io</span></h1>
        
      </div>
      <input type="checkbox" id="-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        &#9776; {/* Hamburger icon */}
      </label>
     <div>
      <ul className="menu">
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button className="login">login</button>
      </div>
    </nav>
  );
};


export default Navigation;

