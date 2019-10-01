import React, { Component } from 'react';

import HomeComponent from '../../components/Home/Home';

const restaurants = [
    {
        imgUrl: 'https://via.placeholder.com/150.png/09f/fff',
        alt: 'example',
        title: '테스트',
        desc: '테스트 카드',
    },
    {
        imgUrl: 'https://via.placeholder.com/150.png/09f/fff',
        alt: 'example',
        title: '테스트',
        desc: '테스트 카드',
    },
    {
        imgUrl: 'https://via.placeholder.com/150.png/09f/fff',
        alt: 'example',
        title: '테스트',
        desc: '테스트 카드',
    },
    {
        imgUrl: 'https://via.placeholder.com/150.png/09f/fff',
        alt: 'example',
        title: '테스트',
        desc: '테스트 카드',
    },
    {
        imgUrl: 'https://via.placeholder.com/150.png/09f/fff',
        alt: 'example',
        title: '테스트',
        desc: '테스트 카드',
    },
    {
        imgUrl: 'https://via.placeholder.com/150.png/09f/fff',
        alt: 'example',
        title: '테스트',
        desc: '테스트 카드',
    },
    {
        imgUrl: 'https://via.placeholder.com/150.png/09f/fff',
        alt: 'example',
        title: '테스트',
        desc: '테스트 카드',
    },
    {
        imgUrl: 'https://via.placeholder.com/150.png/09f/fff',
        alt: 'example',
        title: '테스트',
        desc: '테스트 카드',
    },
    {
        imgUrl: 'https://via.placeholder.com/150.png/09f/fff',
        alt: 'example',
        title: '테스트',
        desc: '테스트 카드',
    },
    {
        imgUrl: 'https://via.placeholder.com/150.png/09f/fff',
        alt: 'example',
        title: '테스트',
        desc: '테스트 카드',
    },
    {
        imgUrl: 'https://via.placeholder.com/150.png/09f/fff',
        alt: 'example',
        title: '테스트',
        desc: '테스트 카드',
    },
    {
        imgUrl: 'https://via.placeholder.com/150.png/09f/fff',
        alt: 'example',
        title: '테스트',
        desc: '테스트 카드',
    },
];

interface State {}
interface Props {}

export default class Home extends Component<State, Props> {
    render() {
        return <HomeComponent restaurants={restaurants} />;
    }
}
