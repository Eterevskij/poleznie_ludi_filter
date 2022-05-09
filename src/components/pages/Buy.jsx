import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../App.css';

import FilterRange from '../inputs/FilterRange';
import SelectWithCategories from '../inputs/SelectMultipleWithGroups';
import SelectMultiple from '../inputs/SelectMultiple';
import SliderPrice from '../inputs/SliderPrice';
import SelectOne from '../inputs/SelectOne';
import SelectRoomsCount from '../inputs/SelectRoomsCount';

import { ReactComponent as Search } from '../../icons/Search.svg';

import { Row, Col, Input, Select, Divider } from 'antd';

const allEstate = [
  {
    groupName: 'Жилая',
    items: [
      { name: 'Квартира', value: 'flat' },
      { name: 'Комната', value: 'room' },
      { name: 'Участок', value: 'land' },
      { name: 'Дом', value: 'house' },
      { name: 'Часть дома', value: 'housePart' }
    ]
  },
  {
    groupName: 'Коммерческая',
    items: [
      { name: 'Офис', value: 'office' },
      { name: 'Торговая площадь', value: 'Trading area' },
      { name: 'Склад', value: 'storage' },
      { name: 'Производство', value: 'production' },
      { name: 'Гараж', value: 'garage' }
    ]
  }
]

const timeToMetro = [
  {
    groupName: 'Пешком',
    items: [
      { name: 'до 5 мин.', value: '5 foot' },
      { name: 'до 10 мин.', value: '10 foot' },
      { name: 'до 15 мин.', value: '15 foot' },
    ]
  },
  {
    groupName: 'На транспорте',
    items: [
      { name: 'до 5 мин.', value: '5 car' },
      { name: 'до 10 мин.', value: '10 car' },
      { name: 'до 15 мин.', value: '15 car' },
    ]
  }
]

const repair = [
  { name: 'Без ремонта', value: 'no' },
  { name: 'Типовый', value: 'tipical' },
  { name: 'Евроремонт', value: 'euroRemont' },
  { name: 'Авторский', value: 'Author' },
]

const dealType = [
  { name: 'Продажа', value: 'sell' },
  { name: 'Аренда', value: 'rent' },
]

const bathroomUnit = [
  { name: 'Раздельный', value: 'separate' },
  { name: 'Совмещенный', value: 'combined' },
]

const elevator = [
  { name: 'Пассажирский', value: 'passenger' },
  { name: 'Грузовой', value: 'freight' },
]

const { Option } = Select;

const balcony = [
  { name: 'Балкон', value: 'balcony' },
  { name: 'Лоджия', value: 'loggia' },
]

const windowView = [
  { name: 'Во двор', value: 'backView' },
  { name: 'На улицу', value: 'streetView' },
  { name: 'На улицу и во двор', value: 'backViewAndStreetView' },
]

const placesNearby = [
  { name: 'Парк', value: 'park' },
  { name: 'Водоём', value: 'water' },
  { name: 'Станция метро', value: 'metro' },
]

const metroLines = [
  { name: 'Девяткино', value: 'Devyatkino' },
  { name: 'Академическая', value: 'Akademicheskaya' },
  { name: 'Площадь Ленина', value: 'LeninSquare' },
  { name: 'Волковская', value: 'Volkovskaya ' },
  { name: 'Девяткино', value: 'Devyatkino2' },
  { name: 'Академическая', value: 'Akademicheskaya2' },
  { name: 'Площадь Ленина', value: 'LeninSquare2' },
  { name: 'Волковская', value: 'Volkovskaya2' }
]

const Buy = () => {

  return (
    <>
      <div className="filterPopup__block">

        <Row gutter={[16, 16]}>
          <Col span={24} >
            <Input className="highInput grey" placeholder="Город, адрес, метро, район или ЖК" prefix={<Search className="inputSearchIcon" />} />
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={24} className='estateCatogory__container'>

            <SelectWithCategories className='grey' content={allEstate} title='Тип недвижимости' />

          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={24} >

            <SelectRoomsCount />

          </Col>

        </Row>


      </div>

      <div className="filterPopup__block">


        <SliderPrice min={25000} max={2800000} />

      </div>

      <div className="filterPopup__block">
        <Divider />

        <Row gutter={32}>
          <Col xl={12} lg={12} md={12} sm={12} xs={24} >
            <FilterRange title='Общая площадь' measure='м2' />
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <FilterRange title='Жилая площадь' measure='м2' />
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <FilterRange title='Площадь кухни' measure='м2' />
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <FilterRange title='Высота потолков' measure='м' />
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <SelectOne title={'Санузел'} content={bathroomUnit} />
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <SelectMultiple title={'Ремонт'} content={repair} />
          </Col>

        </Row>
      </div>

      <div className="filterPopup__block">
        <Divider />

        <Row gutter={32}>

          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <FilterRange title='Этаж' />
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <FilterRange title='Этажей в доме' />
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <SelectOne title='Лифт' content={elevator} />
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <SelectOne title='Балкон / Лоджия' content={balcony} />
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <SelectOne title='Вид из окна' content={windowView} />
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <SelectMultiple title='Места рядом' content={placesNearby} />
          </Col>
        </Row>


      </div>

      <div className="filterPopup__block">
        <Divider />

        <Row gutter={32}>

          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <SelectMultiple title='Ветка метро' content={metroLines} />
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <SelectWithCategories title='До метро' content={timeToMetro} name={true} />
          </Col>

        </Row>

      </div>
    </>
  )

}

export default Buy;