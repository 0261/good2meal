import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Affix, Button, Skeleton, Icon } from 'antd';

import SearchBoxContainer from '../../containers/SearchBox/SearchBox';
import TagBoxContainer from '../../containers/TagBox/TagBox';
import Hook from '../../containers/Home/Home';

import Meta from 'antd/lib/card/Meta';

import styles from './Home.scss';

interface Restaurant {
    imgUrl: string;
    alt: string;
    display: string;
    tel: string;
    category: Array<string>;
    context: Array<string>;
}
interface Props {
    loading: boolean;
    onLoading: (loading: boolean) => void;
    restaurants: Array<Restaurant>;
    tags: Array<string>;
    onSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onTagSearch: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const Home: React.FC<Props> = ({
    restaurants,
    onSearch,
    loading,
    onLoading,
    onTagSearch,
    tags,
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
                    <img
                        alt={restaurant.alt}
                        src={'https://via.placeholder.com/150.png/09f/fff'}
                    />
                </Skeleton>
            }
        >
            <Skeleton loading={loading} active>
                <Meta
                    title={restaurant.display}
                    description={`${restaurant.category}`}
                />
            </Skeleton>
        </Card>
    ));
    return (
        <div>
            <SearchBoxContainer onSearch={onSearch} />
            <TagBoxContainer tags={tags} onTagSearch={onTagSearch} />
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
