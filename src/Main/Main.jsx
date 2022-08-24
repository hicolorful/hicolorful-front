import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import './Main.css';
import Select from 'react-select';
import Chart from './Chart';

function Main() {
  const productName = [
    { label: 'a', value: 1 },
    { label: 'b', value: 2 },
    { label: 'c', value: 3 },
  ];

  const [productType, setProductType] = useState('');
  const [productValue, setProductValue] = useState('');
  const [compareValue, setCompareValue] = useState('');
  const [farmPrice, setFarmPrice] = useState('');
  const [preference, setPreference] = useState('');
  const [character, setCharacter] = useState('');

  // category 정보 get
  const getProductType = async () => {
    await axios.get(`http://13.125.166.49:8080/category`).then((res) => {
      const productData = res.data.data;
      setProductType(productData);
    });
  };
  useEffect(() => {
    getProductType();
  }, []);

  // category 적정가 get
  const getProductValue = async () => {
    await axios
      .get(`http://13.125.166.49:8080/reasonable-price?category=김치`)
      .then((res) => {
        const reasonablePrice = res.data;
        console.log(res.data); // reasonablePrice
        setProductValue(reasonablePrice);
      });
  };
  useEffect(() => {
    getProductValue();
  }, []);

  // 가격대비 get
  const getCompareValue = async () => {
    await axios.get(`http://13.125.166.49:8080/compare/2`).then((res) => {
      const comparePrice = res.data;
      console.log(res.data);
      setCompareValue(comparePrice);
    });
  };
  useEffect(() => {
    getCompareValue();
  }, []);

  // 원재료 가격 변동 get
  const getFarmPrice = async () => {
    await axios
      .get(`http://13.125.166.49:8080/farm-price?category=김치`)
      .then((res) => {
        const farmPrice = res.data;
        console.log(res.data);
        setFarmPrice(farmPrice);
      });
  };
  useEffect(() => {
    getFarmPrice();
  }, []);

  // 가격별 선호도 get
  const getPreference = async () => {
    await axios
      .get(`http://13.125.166.49:8080/preference?category=김치`)
      .then((res) => {
        const pricePreference = res.data;
        setPreference(pricePreference);
      });
  };
  useEffect(() => {
    getPreference();
  }, []);

  // 상품 특성 get
  const getCharacter = async () => {
    await axios
      .get(`http://13.125.166.49:8080/character?category=김치`)
      .then((res) => {
        const categoryCharacter = res.data;
        setCharacter(categoryCharacter);
      });
  };
  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div className="Container">
      <Header></Header>
      {/* <Chart /> */}
      <div className="MainContainer">
        <div className="LeftContainer">
          <div className="LeftOneContainer">
            <div className="CategoryName">
              <p className="MainText">상품 종류</p>
              <p className="ProductType">김치</p>
              {productType &&
                productType.map((el) => (
                  <p className="ProductType">{el.name}</p>
                ))}
            </div>
            <div className="CategoryValue">
              <p className="MainText">적정가</p>
              {/* {productValue && productValue.map((el) => (
                  <p>{el.reasonablePrice}</p>
                ))} */}
              {/* <p value={productValue}></p> */}
            </div>
          </div>
          <div className="LeftTwoContainer">
            <p className="MainText">타 플랫폼 가격 대비</p>
            <div className="ProductDropDown">
              <Select options={productName} />
            </div>
            <div className="DataArrayWrap">
              <p className="DataArray">최저가순</p>
              <div className="Line"></div>
              <div className="CompareArrayWrap">
                <div className="CompareArray">
                  {compareValue &&
                    compareValue.map((el) => <p>{el.platformName}</p>)}
                </div>
                <div className="CompareArray">
                  {compareValue &&
                    compareValue.map((el) => (
                      <p>
                        {el.price}
                        <span>원</span>
                      </p>
                    ))}
                </div>
                <div className="CompareArray">
                  {compareValue && compareValue.map((el) => <p>{el.gap}</p>)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="RightContainer">
          <div className="RightOneContainer">
            <p className="MainText">원재료 가격 변동 추이</p>
            <div className="CompareArrayWrap">
              <div>
                {farmPrice && farmPrice.map((el) => <p>{el.produceName}</p>)}
              </div>
              <div>{farmPrice && farmPrice.map((el) => <p>{el.price}</p>)}</div>
              <div>
                {farmPrice &&
                  farmPrice.map((el) => <p>{el.date.substr(0, 10)}</p>)}
              </div>
            </div>
          </div>
          <div className="RightTwoContainer">
            <div className="Preference">
              <p className="MainText">가격별 선호도</p>
              <div className="CompareArrayWrap">
                <div>
                  {preference && preference.map((el) => <p>{el.unitPrice}</p>)}
                </div>
                <div>
                  {preference && preference.map((el) => <p>{el.preference}</p>)}
                </div>
              </div>
            </div>
            <div className="Feature">
              <p className="MainText">상품별 특징</p>
              <div className="DataArrayWrap">
                <p className="DataArray">최저가순</p>
                <div className="Line"></div>
                <div>
                  {character && character.map((el) => <p>{el.unitPrice}</p>)}
                </div>
                <div>
                  {character &&
                    character.map((el) => (
                      <p>{el.characteristicResponseDtos.productName}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
