import React from 'react';
import Header from '../Header/Header';
import './Main.css';

function Main() {
  return (
    <div className="Container">
      <Header></Header>
      <div className="MainContainer">
        <div className="LeftContainer">
          <div className="LeftOneContainer">
            <div className="CategoryName">
              <span className='MainText'>상품 종류</span>
            </div>
            <div className="CategoryValue">
              <span className='MainText'>적정가</span>
            </div>
          </div>
          <div className="LeftTwoContainer">
            <span className='MainText'>타 플랫폼 가격 대비</span>
          </div>
        </div>
        <div className="RightContainer">
          <div className="RightOneContainer">
            <span className='MainText'>원재료 가격 변동 추이</span>
          </div>
          <div className="RightTwoContainer">
            <div className="Preference">
              <span className='MainText'>상품별 선호도</span>
            </div>
            <div className="Feature">
              <span className='MainText'>상품별 특징</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
