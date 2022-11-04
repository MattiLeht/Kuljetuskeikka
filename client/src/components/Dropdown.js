import '../style.css';
import { ReactComponent as ArrowIcon } from '../icons/email.svg';
import { ReactComponent as Ig } from '../icons/ig.svg';
import { ReactComponent as Linkedin } from '../icons/linkedin.svg';
import { ReactComponent as Wap } from '../icons/wap.svg';
import { ReactComponent as Twitter } from '../icons/twitter.svg';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';



function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          
          <DropdownItem
           leftIcon={<ArrowIcon />}
            goToMenu="settings">
            Linkit
          </DropdownItem>
          <DropdownItem
            leftIcon={<ArrowIcon />}
            goToMenu="numbers">
            Numbers
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h3>Linkit</h3>
          </DropdownItem>
          <DropdownItem ><a href='http://www.navisystem.fi'>Navsystem</a></DropdownItem>
          <DropdownItem leftIcon={<Ig />}>Instagram</DropdownItem>
          <DropdownItem leftIcon={<Linkedin/>}>Linkedin</DropdownItem>
          <DropdownItem leftIcon={<Wap />}>Whatsapp</DropdownItem>
          <DropdownItem leftIcon={<Twitter />}>Twitter</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'numbers'}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h3>Numbers</h3>
          </DropdownItem>
          <DropdownItem leftIcon="1">One</DropdownItem>
          <DropdownItem leftIcon="2">Kaksi</DropdownItem>
          <DropdownItem leftIcon="3">Tre</DropdownItem>
          <DropdownItem leftIcon="4">Quatro</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu