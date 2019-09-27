import React from 'react';
import { Row, Col } from 'antd';

import SearchBox from '../SearchBox/SearchBox';
import TagBox from '../TagBox/TagBox';

const Home = () => {
    return (
        <div>
            <SearchBox></SearchBox>
            <TagBox></TagBox>
            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                    col
                </Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                    col
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                    col
                </Col>
            </Row>
        </div>
    );
};

export default Home;
