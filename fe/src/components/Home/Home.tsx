import React, { useState } from 'react';
import { Row, Col, Card, Affix, Button, Skeleton } from 'antd';

import SearchBox from '../SearchBox/SearchBox';
import TagBox from '../TagBox/TagBox';
import Meta from 'antd/lib/card/Meta';

import styles from './Home.scss';

const Home = () => {
    const [loading, setLoading] = useState(true);

    new Promise(resolve => setTimeout(resolve, 1500)).then(() =>
        setLoading(false),
    );

    const testCards = new Array(20).fill(true).map((d, i) => (
        <Card
            className={styles.Card}
            key={i}
            hoverable
            cover={
                <Skeleton loading={loading} avatar={{ size: 'large' }} active>
                    <img
                        alt='example'
                        src='https://via.placeholder.com/300.png/09f/fff'
                    />
                </Skeleton>
            }
        >
            <Skeleton loading={loading} active>
                <Meta title='테스트' description='테스트 카드' />
            </Skeleton>
        </Card>
    ));
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
