import { React, useState } from 'react';

import { InputNumber } from 'antd';

const step = 1000;

const letterSize = 16;

const formatNumber = (val) => {
    if (!val) return 0;
    return `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(/\.(?=\d{0,2}$)/g, ",");
  }
  

const SliderPriceInput = (props) => {

    debugger

    let inputSize;
    let {min, max, handlePriceChange, currentMin, currentMax } = props.config;
    let { type, clickHandler } = props;

    let current = null;

    currentMin = currentMin.currentMin;
    currentMax = currentMax.currentMax;

    if( type === 'min' ) {
        current = currentMin;
    } else if( type === 'max' ) {
        current = currentMax;
    }
    
    inputSize = String(current).length * letterSize;


    return (
        <>

            <p className="SliderPrice__inputTitle">{(type === 'min') ? 'мин' : 'макс' }. цена</p>
            
            <InputNumber
                    min={min}
                    max={max}
                    controls={false}
                    value={current}
                    addonAfter={'₽'}
                    onChange={(num) => {handlePriceChange(num, type )}}
                    style={{ width: `calc( ${inputSize}px - 10px)` }}
                    formatter={(value) => formatNumber(value)}
                    step={step}
                    className={`SliderPriceInput ${true ? 'active' : ''}`}
                    onFocus={()=> clickHandler(true)}
                    onBlur={()=> clickHandler(false)}
                    />

        </>
    )

}

export default SliderPriceInput;