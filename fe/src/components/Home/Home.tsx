import React, { useState } from 'react';
import { Row, Col, Card, Affix, Button, Skeleton, Icon } from 'antd';

import SearchBoxContainer from '../../containers/SearchBox/SearchBox';
import TagBoxContainer from '../../containers/TagBox/TagBox';
import Meta from 'antd/lib/card/Meta';

import styles from './Home.scss';

interface Restaurant {
    imgUrl: string;
    alt: string;
    title: string;
    desc: string;
}
interface Props {
    restaurants: Array<Restaurant>;
}

const Home: React.FC<Props> = ({ restaurants }) => {
    const [loading, setLoading] = useState(true);

    new Promise(resolve => setTimeout(resolve, 1500)).then(() =>
        setLoading(false),
    );

    const restaurant = restaurants.map((restaurant, index) => (
        <Card
            className={styles.Card}
            key={index}
            cover={
                <Skeleton
                    loading={loading}
                    paragraph={{ rows: 0 }}
                    avatar
                    active
                >
                    <img alt={restaurant.alt} src={restaurant.imgUrl} />
                </Skeleton>
            }
        >
            <Skeleton loading={loading} active>
                <Meta
                    title={restaurant.title}
                    description={`${restaurant.desc} ${index + 1}`}
                />
            </Skeleton>
        </Card>
    ));
    return (
        <div>
            <SearchBoxContainer />
            <TagBoxContainer />
            <div className={styles.Home}>{restaurant}</div>
            <div className={styles.Affix}>
                <Affix offsetBottom={10}>
                    <Icon
                        className={styles.SyncIcon}
                        onClick={() => setLoading(true)}
                        type='sync'
                        spin={loading}
                    />
                </Affix>
            </div>
        </div>
    );
};

export default Home;
