import React, { Component } from 'react';

import TagBoxComponent from '../../components/TagBox/TagBox';

const tags = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
];

interface State {}
interface Props {}

export default class TagBox extends Component<State, Props> {
    render() {
        return <TagBoxComponent tags={tags} />;
    }
}
