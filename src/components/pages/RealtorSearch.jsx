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

const balcony = [
    { name: 'Балкон', value: 'balcony' },
    { name: 'Лоджия', value: 'loggia' },
]

const cities = [
    { name: 'г. Ижевск', value: 'Izhevsk' },
    { name: 'г. Белгород', value: 'Belgorod' },
    { name: 'г. Белгород', value: 'Belgorod1' },
    { name: 'г. Белгород', value: 'Belgorod2' },
    { name: 'г. Белгород', value: 'Belgorod3' },
]

const Rent = (props) => {

    return (
        <>
            <div className="filterPopup__block">

                <Row gutter={[16, 16]}>
                    <Col span={12} >
                        <SelectOne content={cities} placeholder='Город' className={'grey'}  />
                    </Col>

                    <Col span={12}>

                        <Input className='textInput grey' placeholder='ФИО' />

                    </Col>

                    <Col span={12} >
                        <Input className='textInput grey' placeholder='Телефон' />
                    </Col>

                    <Col span={12} >
                        <SelectOne className='grey' content={dealType} title='Тип сделки'  />
                    </Col>

                </Row>


            </div>
        </>
    )

}

export default Rent;