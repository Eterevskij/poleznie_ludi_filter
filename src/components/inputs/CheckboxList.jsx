import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../App.css';

import { Checkbox, Col, Row } from 'antd';

const CheckboxList = (props) => {

    const { content, title } = props;

    return (
        <>
            <Col span={20}>
                <div className="checkboxList__wrappeer">
                    <p className="checkboxList__title">{title}</p>
                    <Row className='heckboxList__list' gutter={[0, 24]}>
                        {content.map(item => {
                            return (
                                <Col  xl={8} lg={8} md={8} sm={8} xs={24} >
                                    <Checkbox className='filterCheckbox'>{item.name}</Checkbox>
                                </Col>
                            )
                        })

                        }
                    </Row>
                </div>
            </Col>
        </>
    )

}

export default CheckboxList;