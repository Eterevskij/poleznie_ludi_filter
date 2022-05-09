import { React, useState } from 'react';
import SliderPriceInput from './SliderPriceInput';

import { Row, Col, Select, Slider, InputNumber } from 'antd';

const step = 1000;


const SliderPrice = (props) => {

    const {min, max} = props;

    const [currentMin, setCurrentMin] = useState(min);
    const [currentMax, setCurrentMax] = useState(max);
    const [isMinFocused, setMinFocus] = useState(false);
    const [isMaxFocused, setMaxFocus] = useState(false);



    const handlePriceChange = (range, slider) => {


        if(!slider) { // Фикс бага с ручным вводом из инпута

            let min = range[0];
            let max = range[1];
    
            setCurrentMin(min);
            setCurrentMax(max);

        } else {

            let num = range;

            if(slider == 'min'){
                setCurrentMin(num);
            } else {
                setCurrentMax(num);
            }
        }

    }

    const inputConfig = {
        min: min,
        max: max,
        handlePriceChange: handlePriceChange,
        step: step,
        currentMin: {currentMin},
        currentMax: {currentMax}
    }

    debugger

    return (
        <>
            
        <p className="inputName">Ценовой диапозон</p>

        <Slider className='priceRange' min={min} max={max} onChange={handlePriceChange} range value={[currentMin, currentMax]}  />

        <Row className="priceRange__inputsWrapper" gutter={32}>

            <Col span={12}>
                <div className={`priceRange__inputsWrapper__inputWrapper ${isMinFocused ? 'active' : ''}`}>

                <SliderPriceInput 
                        clickHandler={setMinFocus}
                        config = {inputConfig}
                        type = {'min'}
                        />
                </div>
            </Col>
            
            <p className="priceRange__inputsWrapper__dash">–</p>

            <Col span={12}>
                <div className={`priceRange__inputsWrapper__inputWrapper ${isMaxFocused ? 'active' : ''}`}>

                    <SliderPriceInput 
                        config = {inputConfig}
                        type = {'max'}
                        clickHandler={setMaxFocus}
                        />
                    
                </div>
            </Col>

        </Row>
            </>
    )

}

export default SliderPrice;