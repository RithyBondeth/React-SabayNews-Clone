import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Ads from '../assets/ads-images/navbar-ads/navbar-ads.jpeg';
import NavbarLogo from '../assets/logo-images/navbar-logo.png';

const Header = styled.div`
  background-color: #161616;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.div`
  background-color: #fa1939;
  color: white;
`;

const ItemRes = styled.p<{ show?: string }>`
  cursor: pointer;
  margin: 0px;
  padding: 15px 10px;
  color: white;
  &:hover {
    background-color: #fa1939;
    color: white;
  }
  @media (max-width: 1200px) {
    display: ${(prop) => (prop.show === 'true' ? 'block' : 'none')};
  }
  @media (min-width: 1200px) {
    display: ${(prop) => (prop.show !== 'true' ? 'block' : 'none')};
  }
`;

const Item = styled.p`
  cursor: pointer;
  margin: 0px;
  padding: 15px 10px;
  color: white;
  &:hover {
    background-color: #fa1939;
    color: white;
  }
`;

const Logo = styled.img`
  padding: 10px 0px;
`;

const Poster = styled.img`
  width: 75%;
`;

const dropDownStyle: React.CSSProperties = {
  backgroundColor: '#fa1939',
  margin: '55px -45px',
};

const linkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  cursor: 'pointer',
  margin: '0px',
  padding: '15px 0px',
};

export const Navbar: React.FC = () => {
  return (
    <div>
      <Header>
        <Wrapper className="container">
          <Logo src={NavbarLogo} alt="Navbar-Logo" />
          <Poster src={Ads} alt="Ads Poster" />
        </Wrapper>
      </Header>
      <Nav>
        <Wrapper className="container">
          <Link to="/" style={linkStyle} className="material-icons">
            home
          </Link>
          <Link to="/entertain" style={linkStyle}>
            កម្សាន្ត
          </Link>
          <Link to="/technology" style={linkStyle}>
            បច្ចេកវិទ្យា
          </Link>
          <Link to="/lifeandsociety" style={linkStyle}>
            ជីវិតនិងសង្គម
          </Link>
          <Link to="/sport" style={linkStyle}>
            កីឡា
          </Link>
          <Link to="/deals" style={linkStyle}>
            DEALS
          </Link>
          <Link to="/bacII" style={linkStyle}>
            បាក់ឌុប២០២១
          </Link>
          <Link to="/autotalk" style={linkStyle}>
            AUTOTALK
          </Link>
          <ItemRes>
            <Link to="/healthylife" style={linkStyle}>
              HEALTHY LIFE
            </Link>
          </ItemRes>
          <ItemRes>
            <Link to="/startingup" style={linkStyle}>
              STARTING UP
            </Link>
          </ItemRes>
          <div className="dropleft">
            <Link
              to="#"
              className="btn-dropdown material-icons"
              data-toggle="dropdown"
              style={linkStyle}
            >
              more_horiz
            </Link>
            <div className="dropdown-menu" style={dropDownStyle}>
              <Item className="dropdown-item">
                <Link to="/quiz" style={linkStyle}>
                  QUIZ
                </Link>
              </Item>
              <Item className="dropdown-item">
                <Link to="/covid19" style={linkStyle}>
                  កូវីត-១៩
                </Link>
              </Item>
              <ItemRes className="dropdown-item" show="true">
                <Link to="/healthylife" style={linkStyle}>
                  HEALTHY LIFE
                </Link>
              </ItemRes>
              <ItemRes className="dropdown-item" show="true">
                <Link to="/startingup" style={linkStyle}>
                  STARTING UP
                </Link>
              </ItemRes>
            </div>
          </div>
        </Wrapper>
      </Nav>
    </div>
  );
};
