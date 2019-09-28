import React from 'react';
import { Row, Col, Card, Affix, Button } from 'antd';

import SearchBox from '../SearchBox/SearchBox';
import TagBox from '../TagBox/TagBox';
import Meta from 'antd/lib/card/Meta';

import styles from './Home.scss';

const testCards = new Array(20).fill(true).map((d, i) => (
    <Card
        className={styles.Card}
        key={i}
        hoverable
        cover={
            <img
                alt='example'
                src='https://via.placeholder.com/300.png/09f/fff'
            />
        }
    >
        <Meta title='테스트' description='테스트 카드' />
    </Card>
));

const Home = () => {
    return (
        <div>
            <SearchBox></SearchBox>
            <TagBox></TagBox>
            <div className={styles.Home}>{testCards}</div>
            <Affix offsetBottom={10}>
                <Button type='primary'>테스트 스티키 푸터</Button>
            </Affix>
        </div>
    );
};

export default Home;
