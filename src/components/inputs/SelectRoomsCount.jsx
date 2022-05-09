import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../App.css';

import { ReactComponent as SelectArrow } from '../../icons/SelectArrow.svg';
import { Select } from 'antd';

let studioSelected = false;

const SelectRoomsCount = () => {

    const [currentSelects, setSelect] = useState([]);

    const roomList = ['1', '2', '3', '4', '5', '6+', 'studio'];
    
    const [lastRoomElem, setLastRoomElem] = useState(-1);

    const [isRoomsFilled, setRoomsFilled] = useState(false);

    const { Option } = Select;

    const handleSelect = (selected) => {

        if(selected === 'Studio') {
            studioSelected = true;
        } 

        const updatedSelects = [...currentSelects, selected].sort();
        let selectedLength = updatedSelects.length - 1;
        let lastRoomElemIndex = selectedLength;

        if(studioSelected) {
            lastRoomElemIndex--;
        }

        setLastRoomElem(updatedSelects[lastRoomElemIndex]);

        setSelect(updatedSelects);

    }

    const handleDeselect = (deselected) => {
        debugger

        const updatedSelects = currentSelects.filter(item => item !== deselected);
        
        let selectedLength = updatedSelects.length;

        let lastRoomElemIndex = selectedLength - 1;

        if(deselected === 'Studio') {
            studioSelected = false;
        }

        if(studioSelected) {
            lastRoomElemIndex--;
        }

        setLastRoomElem(updatedSelects[lastRoomElemIndex]);

        setSelect(updatedSelects)

    }

    const handleRoomsChange = (options) => {

        const optionsCount = options.length;
    
        if (optionsCount > 0) {
            setRoomsFilled(true);
        } else {
            setRoomsFilled(false);
        }
      }


    return (

        <>
            <div className="roomCount__container">

                <SelectArrow className='estateCatogory__arrow' />
                
                <p className={`groupSelect__title ${isRoomsFilled ? 'active' : 'disable'}`}>Количество комнат</p>


                <Select
                    mode="multiple"
                    className={`roomCount__wrapper ${isRoomsFilled ? 'filled' : ''}`}
                    dropdownClassName='roomCount__dropdown'
                    placeholder='Количество комнат'
                    onSelect={ (selected) => handleSelect(selected)}
                    value = {currentSelects}
                    onDeselect = { (deselected) => handleDeselect(deselected)}
                    optionLabelProp="label"
                    onChange={handleRoomsChange}
                >

                    {roomList.map( (item ) => {


                            if(item !== 'studio') {
debugger
                                if(item === lastRoomElem) {
                                    return <Option className='roomCount__button' value={item} label={item + ' комн.'}>{item}</Option>
                                }

                                return <Option className='roomCount__button' value={item} label={item}></Option>
                           
                            } else {
                                return <Option className='roomCount__button big' value={'Studio'} label={'Студия'}>Студия</Option>
                            }
                    })}


                </Select>

            </div>
        </>
    )

}

export default SelectRoomsCount;