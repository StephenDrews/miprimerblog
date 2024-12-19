import React from 'react'
import '../menunavegacion/navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      
      <div className="nav_logo">Talento Tech</div>
      
      <div className="nav_items">
        <a href="/">Inicio</a>
        <a href="/">Mision</a>
        <a href="/">Portafolio</a>
        <a href="/">Contacto</a>
      </div>
      
      <div className="nav_toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    
    </div>
  );
}
export default Navbar;
