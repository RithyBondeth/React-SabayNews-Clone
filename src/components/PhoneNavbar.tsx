import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FooterLogo from '../assets/logo-images/footer-logo.png';
import NavbarLogo from '../assets/logo-images/navbar-logo.png';
import GifLogo from '../assets/logo-images/gif-logo.gif';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #111;
  padding: 10px 16px;
  position: relative;
  z-index: 100;
`;

const MenuIcon = styled.button`
  color: white;
  cursor: pointer;
  background: none;
  border: none;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const PhoneNavbar: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth > 768) {
        setShow(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Nav>
      <MenuIcon onClick={() => setShow(!show)} aria-label="Toggle menu">
        <span className="material-icons">{show ? 'close' : 'menu'}</span>
      </MenuIcon>
      <img src={NavbarLogo} alt="sabay news logo" height="38px" />
      <img src={GifLogo} alt="media sabay logo" height="38px" />
      <Drawer show={show} onClose={() => setShow(false)} />
    </Nav>
  );
};

const DrawerContainer = styled.div<{ show: boolean }>`
  background-color: #1a1a1a;
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  transform: ${(prop) => (prop.show ? 'translateY(0)' : 'translateY(-110%)')};
  opacity: ${(prop) => (prop.show ? '1' : '0')};
  transition: transform 0.25s ease, opacity 0.2s ease;
  z-index: 99;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
`;

const HomeLink = styled.div`
  background-color: #d90c16;
  padding: 4px 0px;
`;

const Menu = styled.div`
  display: flex;
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-right: 1px solid #2a2a2a;
  &:last-child {
    border-right: none;
  }
`;

const NavLink = styled(Link)`
  color: #e0e0e0;
  text-decoration: none;
  padding: 13px 16px;
  display: block;
  font-size: 14px;
  border-bottom: 1px solid #2a2a2a;
  &:hover {
    background-color: #d90c16;
    color: white;
  }
`;

const ExpandItem = styled.div<{ hide: boolean }>`
  background-color: #222;
  display: ${(prop) => (prop.hide ? 'none' : 'block')};
`;

const ExpandLink = styled(Link)`
  color: #ccc;
  text-decoration: none;
  padding: 11px 20px;
  display: block;
  font-size: 13px;
  border-bottom: 1px solid #2a2a2a;
  &:hover {
    background-color: #d90c16;
    color: white;
  }
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  color: #e0e0e0;
  padding: 13px 16px;
  width: 100%;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 1px solid #2a2a2a;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    background-color: #d90c16;
    color: white;
  }
`;

const DrawerFooter = styled.div`
  padding: 12px;
  text-align: center;
  border-top: 1px solid #2a2a2a;
`;

interface DrawerProps {
  show: boolean;
  onClose: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({ show, onClose }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <DrawerContainer show={show}>
      <HomeLink>
        <NavLink to="/" className="material-icons" onClick={onClose} style={{ fontSize: 22 }}>
          home
        </NavLink>
      </HomeLink>
      <Menu>
        <SubMenu>
          <NavLink to="/entertain" onClick={onClose}>កម្សាន្ត</NavLink>
          <NavLink to="/lifeandsociety" onClick={onClose}>ជីវិតនិងសង្គម</NavLink>
          <NavLink to="/deals" onClick={onClose}>DEALS</NavLink>
          <MoreButton onClick={() => setExpanded(!expanded)}>
            <span className="material-icons" style={{ fontSize: 18 }}>
              {expanded ? 'expand_less' : 'more_horiz'}
            </span>
            បន្ថែម
          </MoreButton>
        </SubMenu>
        <SubMenu>
          <NavLink to="/technology" onClick={onClose}>បច្ចេកវិទ្យា</NavLink>
          <NavLink to="/sport" onClick={onClose}>កីឡា</NavLink>
          <NavLink to="/bacII" onClick={onClose}>បាក់ឌុប២០២១</NavLink>
          <ExpandItem hide={!expanded}>
            <ExpandLink to="/autotalk" onClick={onClose}>AUTOTALK</ExpandLink>
            <ExpandLink to="/healthylife" onClick={onClose}>HEALTHY LIFE</ExpandLink>
            <ExpandLink to="/startingup" onClick={onClose}>STARTING UP</ExpandLink>
            <ExpandLink to="/quiz" onClick={onClose}>QUIZ</ExpandLink>
            <ExpandLink to="/covid19" onClick={onClose}>កូវីត-១៩</ExpandLink>
          </ExpandItem>
        </SubMenu>
      </Menu>
      <DrawerFooter>
        <img src={FooterLogo} height="18px" alt="sabay footer logo" />
      </DrawerFooter>
    </DrawerContainer>
  );
};
