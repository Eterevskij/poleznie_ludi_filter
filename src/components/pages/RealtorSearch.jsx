import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../App.css';

import FilterRange from '../inputs/FilterRange';
import SelectWithCategories from '../inputs/SelectMultipleWithGroups';
import SelectMultiple from '../inputs/SelectMultiple';
import SliderPrice from '../inputs/SliderPrice';
import SelectOne from '../inputs/SelectOne';
import CheckboxList from '../inputs/CheckboxList';


import { ReactComponent as SelectArrow } from '../../icons/SelectArrow.svg';
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

const dealType = [
    { name: 'Продажа', value: 'sell' },
    { name: 'Аренда', value: 'rent' },
]


const { Option } = Select;

const rating = [
    { name: 'до 5 баллов', value: '5-' },
    { name: 'до 10 баллов', value: '10-' },
    { name: 'до 24 баллов', value: '24-' },
    { name: 'более 24 баллов', value: '24+' },
]

const cities = [
    { name: 'г. Ижевск', value: 'Izhevsk' },
    { name: 'г. Белгород', value: 'Belgorod' },
    { name: 'г. Белгород', value: 'Belgorod1' },
    { name: 'г. Белгород', value: 'Belgorod2' },
    { name: 'г. Белгород', value: 'Belgorod3' },
]

const dealsMade = [
    { name: 'до 5 сделок', value: '5-' },
    { name: 'до 10 сделок', value: '10-' },
    { name: 'до 20 сделок', value: '20-' },
    { name: 'более 20 сделок', value: '20+' },
]

const workExperience = [
    { name: 'до 6 месяцев', value: '6m-' },
    { name: 'до 1 года', value: '1y-' },
    { name: 'до 2 лет', value: '2y-' },
    { name: 'более 2 лет', value: '2y+' },
]

const Rent = () => {

    return (
        <>
            <div className="filterPopup__block realtorSearch">

                <div className="realtorSearch__header">

                    <Row gutter={[16, 12]}>
                        <Col xl={12} lg={12} md={12} sm={12} xs={24} >
                            <SelectOne content={cities} placeholder='Город' className={'grey'} />
                        </Col>

                        <Col xl={12} lg={12} md={12} sm={12} xs={24} >

                            <Input className='textInput grey' placeholder='ФИО' />

                        </Col>

                        <Col xl={12} lg={12} md={12} sm={12} xs={24} >
                            <Input className='textInput grey' placeholder='Телефон' />
                        </Col>

                        <Col xl={12} lg={12} md={12} sm={12} xs={24} >
                            <SelectOne className='grey' content={dealType} />
                        </Col>

                    </Row>

                </div>

                <div className="filterPopup__block">
                    <Divider />

                    <Row gutter={32}>

                        <Col xl={12} lg={12} md={12} sm={12} xs={24} >
                            <SelectOne title='Рейтинг' content={rating} />
                        </Col>

                        <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                            <SelectOne title='Сделок проведено' content={dealsMade} />
                        </Col>

                        <Col span={24}>
                            <SelectOne title='Опыт работы' content={workExperience} />
                        </Col>

                    </Row>
                </div>

            </div>
        </>
    )

}

export default Rent;