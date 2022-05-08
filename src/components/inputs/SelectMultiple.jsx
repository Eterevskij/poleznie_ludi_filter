import { React, useState } from 'react';

import { Row, Col, Select } from 'antd';

import { ReactComponent as SelectMark } from '../../icons/SelectMark.svg';
import { ReactComponent as SelectArrow } from '../../icons/SelectArrow.svg';

let totalUsedSymbols = 0;


const SelectMultiple = (props) => {

  const { content, title } = props;
  const { Option } = Select;

  const symbolLimit = 30;

  const [currentSelects, setSelect] = useState([]);
  const [cutElem, setCutElem] = useState({});

  let hasLimit = false;


  const handleSelect = (selected) => {
    let cutElemTemp;
    debugger
    const selectedElem = content.filter(select => select.value === selected)[0];
    const symbolsAfterUpdate = totalUsedSymbols + selectedElem.name.length;

    if (symbolsAfterUpdate > symbolLimit) {
      hasLimit = true;
      let symbolDifference = symbolsAfterUpdate - symbolLimit;

      cutElemTemp = selectedElem;
      totalUsedSymbols = symbolLimit;

      let cuttedName = cutElemTemp.name.substr(0, cutElemTemp.name.length - symbolDifference);
      cutElemTemp = { ...cutElemTemp, cuttedName: cuttedName };
      console.log('Превышение длины строки', symbolDifference);
      setCutElem(cutElemTemp);
    } else {

      console.log('Строка в норме', symbolsAfterUpdate);
      totalUsedSymbols = symbolsAfterUpdate;
    }


    setSelect([...currentSelects, selected]);
  }

  const handleDeselect = (deselected) => {
    // const deselectedElem = content.filter(select => select.value === selected)[0];

    // if (hasLimit) {
    //   const symbolsAfterUpdate = totalUsedSymbols - deselectedElem.name.length;

      // if (symbolsAfterUpdate - ) {

      // }
    // }
    // setSelect(currentSelects.filter(item => item !== deselected));
    // setTotalUsedSymbols(totalUsedSymbols - deselected.length);
  }

  return (
    <div className="selectMultiple__container">

      <p className='filterRange__title'>{title}</p>

      <div className="SelectMultiple__wrapper">

        <SelectArrow className='SelectMultiple__arrow' />

        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Выбрать"
          optionLabelProp="label"
          className='SelectMultiple'
          dropdownClassName='SelectMultiple__dropdown'
          maxTagCount={3}
          onSelect={(selected) => { handleSelect(selected) }}
          onDeselect={(deselected) => handleDeselect(deselected)}
          value={currentSelects}
        >

          {content.map(item => {
            if (item.value !== cutElem.value) {

              return (
                <Option value={item.value} label={item.name} className="demo-option-label-item SelectMultiple__item">
                  <div className="SelectMultiple__item__text">{item.name}</div>
                  <div className="SelectMultiple__item__icon"><SelectMark /></div>
                </Option>
              )

            } else {

              return (
                <Option value={item.value} label={cutElem.cuttedName} className="demo-option-label-item SelectMultiple__item">
                  <div className="SelectMultiple__item__text">{item.name}</div>
                  <div className="SelectMultiple__item__icon"><SelectMark /></div>
                </Option>
              )

            }

          })}



        </Select>


      </div>
    </div>
  )

}

export default SelectMultiple;