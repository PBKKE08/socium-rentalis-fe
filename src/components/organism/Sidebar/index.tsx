import React, { useState } from 'react';
import NavLogo from '../Navbar/NavLogo';

const Sidebar = () => {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdown1Open(!isDropdown1Open);
  };

  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open);
  };

  const toggleDropdown3 = () => {
    setIsDropdown3Open(!isDropdown3Open);
  };

  const sidebarStyle: React.CSSProperties = {
    width: '240px',
    padding: '16px',
    backgroundColor: '#FFFFFF', // Replace with your desired primary color value
    height: '100vh',
  };

  const menuStyle: React.CSSProperties = {
    padding: '0',
    listStyle: 'none',
    color : 'black'
  };

  const menuSectionStyle: React.CSSProperties = {

    padding : '16px 16px',
  };

  const sectionHeaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const dropdownIconStyle: React.CSSProperties = {
    marginLeft: 'auto',
    transition: 'transform 0.3s',
    transform: isDropdown1Open ? 'rotate(180deg)' : 'rotate(0deg)',
  };

  const subMenuStyle: React.CSSProperties = {
    listStyle: 'none',
    padding : '16px 16px',
    display: 'none',
  };

  if (isDropdown1Open) {
    dropdownIconStyle.transform = 'rotate(180deg)';
    subMenuStyle.display = 'block';
  }

  const submenuHoverStyle = {
    backgroundColor: '#E0E0E0', // Replace with your desired hover background color
  };

  return (
    <div style={sidebarStyle}>
      {/* Sidebar content */}
      <NavLogo />
      <ul style={menuStyle}>
        <li style={menuSectionStyle}>
          <div style={sectionHeaderStyle} onClick={toggleDropdown1}>
            Dashboard
            <span style={dropdownIconStyle}>{isDropdown1Open ? '▲' : '▼'}</span>
          </div>
          {isDropdown1Open && (
            <ul style={subMenuStyle}>
              <li>Dashboard</li>

            </ul>
          )}
        </li>
        <li style={menuSectionStyle}>
          <div style={sectionHeaderStyle} onClick={toggleDropdown2}>
            Data Pengguna
            <span style={dropdownIconStyle}>{isDropdown2Open ? '▲' : '▼'}</span>
          </div>
          {isDropdown2Open && (
            <ul style={subMenuStyle}>
              <li>Data Pengguna</li>
              <li>Data Partner</li>
            </ul>
          )}
        </li>
        <li style={menuSectionStyle}>
          <div style={sectionHeaderStyle} onClick={toggleDropdown3}>
            Data Pemesanan
            <span style={dropdownIconStyle}>{isDropdown3Open ? '▲' : '▼'}</span>
          </div>
          {isDropdown3Open && (
            <ul style={subMenuStyle}>
              <li>Data Pemesanan</li>
              <li>Status Verifikasi Pembayaran</li>
              <li>Laporan Pemesanan</li>
            </ul>
          )}
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
