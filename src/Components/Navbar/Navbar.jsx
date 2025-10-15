import React, { useRef, useState } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
    setIsMenuOpen(true);
  }
  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
    setIsMenuOpen(false);
  }

  return (
    <div className='navbar'>
      {/* <img src={logo} alt='' /> */}
      <div className='logo'>YOLETECH</div>
      {!isMenuOpen && (
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      )}
      <ul ref={menuRef} className="nav-menu">
        {isMenuOpen && (
          <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
        )}
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => { setMenu('home'); closeMenu(); }}>Home</p></AnchorLink>{menu === 'home' ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => { setMenu('about'); closeMenu(); }}>About</p></AnchorLink>{menu === 'about' ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => { setMenu('services'); closeMenu(); }}>Services</p></AnchorLink>{menu === 'services' ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => { setMenu('work'); closeMenu(); }}>Portfolio</p></AnchorLink>{menu === 'work' ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => { setMenu('contact'); closeMenu(); }}>Contact</p></AnchorLink>{menu === 'contact' ? <img src={underline} alt='' /> : <></>}</li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar