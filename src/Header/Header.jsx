import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import kurlylogo from '../assets/img/kurly-logo.png';

function Header() {
  const categoryName = [
    { label: '김치', value: 1 },
    { label: '사과', value: 2 },
    { label: '계란', value: 3 },
  ];

  return (
    <div className="HeaderContainer">
      <div className="HeaderBox">
        <img src={kurlylogo} />
        <span>실시간 적정가 모니터링</span>
      </div>
      <div className="DropDownBox">
        <Select options={categoryName} />
      </div>
    </div>
  );
}

export default Header;
