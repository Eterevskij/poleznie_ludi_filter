import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';

import Buy from './components/pages/Buy';
import Rent from './components/pages/Rent';
import RealtorSearch from './components/pages/RealtorSearch';

import { Row, Col, Button, Divider } from 'antd';


import { ReactComponent as Close } from './icons/Close.svg';



function App() {

  const [ page, setPage ] = useState('buy');

  return (
    <div className="App">
      <div className="filterPopup">

        <div className="filterPopup__pages">

          <p className={`filterPopup__pages__item ${(page === 'buy') ? 'active' : ''}`} onClick={() => setPage('buy')}>Купить</p>

          <p className={`filterPopup__pages__item ${(page === 'rent') ? 'active' : ''}`} onClick={() => setPage('rent')}>Снять</p>

          <p className={`filterPopup__pages__item ${(page === 'realtorSearch') ? 'active' : ''}`} onClick={() => setPage('realtorSearch')}>Поиск риэлтора</p>

        </div>

        <div className="closeBtn">
          <Close />
        </div>

        <div className="filterPopup__content">

          {(page === 'buy') ? 
            <Buy />
          : (page === 'rent') ? 
            <Rent />
          : <RealtorSearch />}
        

        </div>

        <div className="filterPopup__buttons__wrapper">
          
          <Row gutter={[30,0]}>

            <Divider />

            <Col span={7}>
              <div className="filterPopup__button reset">
                <Button>Сбросить&nbsp;<span className='filterPopup__button__filterWord'> фильтры</span></Button>
              </div>
            </Col>

            <Col span={17}>
              <div className="filterPopup__button submit">
                <Button>Подобрать</Button>
              </div>
            </Col>

          </Row>

        </div>

      </div>




    </div>
  );
}

export default App;
