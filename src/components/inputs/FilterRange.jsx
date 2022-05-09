import { React, useState } from 'react';

import { Row, Col, InputNumber } from 'antd';


const FilterRange = (props) => {

    const [isFocused, setFocus] = useState(false);

    const { title, measure } = props;

    const letterSize = 16;

    const [currentMin, setCurrentMin] = useState(null);
    const [currentMax, setCurrentMax] = useState(null);

    let inputSizeMin = String(currentMin).length * letterSize;
    let inputSizeMax = String(currentMax).length * letterSize;

    debugger



    return (
        <div className="filterRange">
            <p className='filterRange__title'>{title}
                {measure && <sup className='filterRange__title__TopIndex'>{measure}</sup>}
            </p>

            <div className={`filterRange__inputContainer ${isFocused ? 'active' : ''}`}>

                <div className="filterRange__line"></div>

                <Row>

                    <Col span={12}>
                        <div className="filterRange__inputWrapper">
                            <span className="filterRange__input__beforeText">от</span>
                            <InputNumber
                                className='filterRange__input'
                                min={0}
                                controls={false}
                                onChange={num => { setCurrentMin(num) }}
                                value={currentMin}
                                style={{
                                    width: `calc( ${inputSizeMin}px - 8px + 6px )`
                                }}
                                onFocus={()=> setFocus(true)}
                                onBlur={()=> setFocus(false)}
                            />
                            {(currentMin && measure) ?
                                <sup className='filterRange__measure'>
                                    {measure}
                                </sup>
                                :
                                ''}
                        </div>
                    </Col>

                    <Col span={12}>
                        <div className="filterRange__inputWrapper">
                            <span className="filterRange__input__beforeText">до</span>
                            <InputNumber
                                className='filterRange__input'
                                min={0}
                                controls={false}
                                onChange={num => { setCurrentMax(num) }}
                                value={currentMax}
                                style={{
                                    width: `calc( ${inputSizeMax}px - 8px + 6px )`
                                }}
                                onFocus={()=> setFocus(true)}
                                onBlur={()=> setFocus(false)}
                            />
                            {(currentMax && measure) ?
                                <sup className='filterRange__measure'>
                                    {measure}
                                </sup>
                                :
                                ''}

                        </div>
                    </Col>


                </Row>

            </div>
        </div>
    )

}

export default FilterRange;