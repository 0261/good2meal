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
interface Props {
    onTagSearch: (tagName: string) => void;
}

export default class TagBox extends Component<Props, State> {
    render() {
        return (
            <TagBoxComponent onTagSearch={this.props.onTagSearch} tags={tags} />
        );
    }
}
