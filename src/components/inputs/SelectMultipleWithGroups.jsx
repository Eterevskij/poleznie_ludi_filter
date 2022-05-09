import { React, useState } from 'react';

import { Row, Col, Select } from 'antd';
import { ReactComponent as CheckboxCheckMark } from '../../icons/CheckboxCheckMark.svg';

import { ReactComponent as SelectArrow } from '../../icons/SelectArrow.svg';


const SelectMultipleWithGroups = (props) => {

  const { title, content, name, className } = props;

  const [category, setCategory] = useState(0);
  const [isCategoriesFilled, setCategoriesFilled] = useState(false);
  const isGrey = className?.includes('grey');

  const { Option } = Select;

  const handleEstateTypeChange = (options) => {

    const optionsCount = options.length;

    if (optionsCount > 0) {
      setCategoriesFilled(true);
    } else {
      setCategoriesFilled(false);
    }
  }

  debugger

  return (
    <div className="estateCatogory__container">
      {name &&
        <p className='SelectMultipleWithGroups__title'>{title}</p>
      }

      <div className="estateCatogory__wrapper">

        <p className={`groupSelect__title ${isCategoriesFilled ? 'active' : 'disable'}`}>{title}</p>


        <SelectArrow className='estateCatogory__arrow' />


        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder={title}
          optionLabelProp="label"
          className={`groupSelect 
                      ${isCategoriesFilled ? 'filled' : ''} 
                      ${isGrey ? 'grey' : ''}`}
          maxTagCount={3}
          onChange={handleEstateTypeChange}
          virtual={false}
          dropdownClassName='groupSelect__dropdown'
        >

          <Option disabled={true} className='groupSelect__changeGroupButtons'>
            <Row gutter={[8, 0]}>

              {
                content.map((group, i) => {
                  const groupName = group.groupName;
                  return (

                    <Col className='groupSelect__changeGroupButtons__button__wrapper'>
                      <button className={`groupSelect__changeGroupButtons__button ${(category === i) ? 'active' : ''}`} onClick={() => { setCategory(i) }}>{groupName}</button>
                    </Col>

                  )
                })
              }

            </Row>
          </Option>

          {content[category].items.map(item => {
            debugger
            return (
              <Option value={item.value} label={item.name} className='groupSelect__option'>
                <span className="groupSelect__option__checkbox__wrapper">
                  <span className="groupSelect__option__checkbox disable"></span>

                  <span className="groupSelect__option__checkbox active">
                    <CheckboxCheckMark className="groupSelect__option__checkbox__icon" />
                  </span>
                </span>
                <span className="groupSelect__option__text">
                  {item.name}
                </span>
              </Option>
            )
          })}

        </Select>

      </div>

    </div>
  )

}

export default SelectMultipleWithGroups;