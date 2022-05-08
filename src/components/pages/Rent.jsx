import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../App.css';

import FilterRange from '../inputs/FilterRange';
import SelectWithCategories from '../inputs/SelectMultipleWithGroups';
import SelectMultiple from '../inputs/SelectMultiple';
import SliderPrice from '../inputs/SliderPrice';
import SelectOne from '../inputs/SelectOne';
import CheckboxList from '../inputs/CheckboxList';
import SelectRoomsCount from '../inputs/SelectRoomsCount';


import { ReactComponent as Search } from '../../icons/Search.svg';

import { Row, Col, Input, Divider } from 'antd';

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

const rentalPeriod = [
    { name: 'Посуточно', value: 'daily' },
    { name: 'На несколько месяцев', value: 'monthly' },
    { name: 'От года', value: 'year' },
]

const facilities = [
    { name: 'Интернет', value: 'internet' },
    { name: 'Холодильник', value: 'refrigerator' },
    { name: 'Стиральная машина', value: 'washingMachine' },
    { name: 'Телевизор', value: 'tvSet' },
    { name: 'С мебелью', value: 'furnished' },
    { name: 'Кондиционер', value: 'airConditioning' }
]

const Rent = (props) => {

    return (
        <>
            <div className="filterPopup__block">

                <Row gutter={[16, 16]}>
                    <Col span={24} >
                        <Input className="highInput" placeholder="Город, адрес, метро, район или ЖК" prefix={<Search className="inputSearchIcon" />} />
                    </Col>

                    <Col span={12} className='estateCatogory__container'>

                        <SelectWithCategories className='grey' content={allEstate} title='Тип недвижимости' />

                    </Col>

                    <Col span={12} >

                        <SelectRoomsCount />

                    </Col>

                </Row>


            </div>

            <div className="filterPopup__block">

                <SliderPrice min={25000} max={2800000} />



                <Row gutter={32}>

                    <Col span={24}>
                        <SelectOne title={'Срок аренды'} content={rentalPeriod} />
                    </Col>

                </Row>

            </div>

            <div className="filterPopup__block">

                <Divider />

                <Row gutter={32}>
                    <Col span={12}>
                        <FilterRange title='Общая площадь' measure='м2' />
                    </Col>

                    <Col span={12}>
                        <FilterRange title='Жилая площадь' measure='м2' />
                    </Col>
                </Row>

                <Row gutter={32}>

                    <Col span={12}>
                        <FilterRange title='Площадь кухни' measure='м2' />
                    </Col>

                    <Col span={12}>
                        <FilterRange title='Высота потолков' measure='м' />
                    </Col>

                </Row>

                <Row gutter={32}>

                    <Col span={12}>
                        <SelectOne title={'Санузел'} content={bathroomUnit} />
                    </Col>

                    <Col span={12}>
                        <SelectMultiple title={'Ремонт'} content={repair} />
                    </Col>

                </Row>
            </div>

            <div className="filterPopup__block">
                <Divider />

                <Row gutter={32}>

                    <Col span={12}>
                        <FilterRange title='Этаж' />
                    </Col>

                    <Col span={12}>
                        <FilterRange title='Этажей в доме' />
                    </Col>

                </Row>


                <Row gutter={32}>

                    <Col span={12}>
                        <SelectOne title='Лифт' content={elevator} />
                    </Col>



                    <Col span={12}>
                        <SelectOne title='Балкон / Лоджия' content={balcony} />
                    </Col>
                </Row>

                <Row gutter={32}>

                    <Col span={12}>
                        <SelectOne title='Вид из окна' content={windowView} />
                    </Col>

                    <Col span={12}>
                        <SelectMultiple title='Места рядом' content={placesNearby} />
                    </Col>
                </Row>


            </div>

            <div className="filterPopup__block">
                <Divider />

                <Row gutter={32}>

                    <Col span={12}>
                        <SelectMultiple title='Ветка метро' content={metroLines} />
                    </Col>

                    <Col span={12}>
                        !!!!{/* <SelectWithCategories title='До метро' content={timeToMetro} /> */}
                    </Col>

                </Row>

                <Row gutter={32}>

                    <CheckboxList title='Удобства' content={facilities} name={true} />

                </Row>

            </div>
        </>
    )

}

export default Rent;