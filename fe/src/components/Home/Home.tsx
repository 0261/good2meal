import React, { useState, useEffect } from 'react';
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
    loading: boolean;
    onLoading: (loading: boolean) => void;
    restaurants: Array<Restaurant>;
    onSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onTagSearch: (tagName: string) => void;
}

const Home: React.FC<Props> = ({
    restaurants,
    onSearch,
    loading,
    onLoading,
    onTagSearch,
}) => {
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
            <SearchBoxContainer onSearch={onSearch} />
            <TagBoxContainer onTagSearch={onTagSearch} />
            <div className={styles.Home}>{restaurant}</div>
            <div className={styles.Affix}>
                <Affix offsetBottom={10}>
                    <Icon
                        className={styles.SyncIcon}
                        onClick={() => onLoading(true)}
                        type='sync'
                        spin={loading}
                    />
                </Affix>
            </div>
        </div>
    );
};

export default Home;
