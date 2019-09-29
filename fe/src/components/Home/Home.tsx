import React, { useState } from 'react';
import { Row, Col, Card, Affix, Button, Skeleton, Icon } from 'antd';

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
                <Skeleton
                    loading={loading}
                    paragraph={{ rows: 0 }}
                    avatar={{ size: 'large' }}
                    active
                >
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
            <div className={styles.Affix}>
                <Affix offsetBottom={10}>
                    <Icon
                        style={{ fontSize: '1.3rem', color: 'black' }}
                        onClick={() => setLoading(true)}
                        type='sync'
                        spin={loading}
                    ></Icon>
                </Affix>
            </div>
        </div>
    );
};

export default Home;
