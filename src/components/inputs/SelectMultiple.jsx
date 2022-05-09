import { React, useState } from 'react';

import { Row, Col, Select } from 'antd';

import {ReactComponent as SelectMark} from '../../icons/SelectMark.svg';
import {ReactComponent as SelectArrow} from '../../icons/SelectArrow.svg';


const SelectMultiple = (props) => {

  const { content, title } = props; 
  const { Option } = Select;

    return (
        <div className="selectMultiple__container">

        <p className='filterRange__title'>{title}</p>
        
        <div className="SelectMultiple__wrapper">

          <SelectArrow className='SelectMultiple__arrow' />

          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Выбрать"
            className='SelectMultiple'
            dropdownClassName='SelectMultiple__dropdown'
            maxTagCount={3}
          >

            {content.map(item => {
              return (
                <Option value={item.value} label={item.name} className="demo-option-label-item SelectMultiple__item">
                <div className="SelectMultiple__item__text">{item.name}</div>
                <div className="SelectMultiple__item__icon"><SelectMark/></div>
              </Option>
              )
            })}



          </Select>


        </div>
        </div>
    )

}

export default SelectMultiple;