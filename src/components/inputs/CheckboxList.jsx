import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../App.css';

import { Checkbox, Col, Row } from 'antd';

const CheckboxList = (props) => {

    const { content } = props;

    return (
        <>
            <Col span={18}>
                <Row>
                {content.map(item => {
                    return (
                        <Col span={8}>
                            <Checkbox className='filterCheckbox'>{item.name}</Checkbox>
                        </Col>
                    )
                })

                }
            </Row>
        </Col>
        </>
    )

}

export default CheckboxList;