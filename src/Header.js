import React ,{useEffect ,useState} from 'react'
import './index.css'
const Header = () => {

  return (
    <header>
    <h2 className="logo"><span>M</span>atch.</h2>
    <nav className="navigation">
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Join</a>
      <a href="#">Contact Us</a>
    </nav>
  </header>
  )
}

export default Header
