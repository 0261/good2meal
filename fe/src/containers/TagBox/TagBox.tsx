import React, { Component } from 'react';

import TagBoxComponent from '../../components/TagBox/TagBox';

interface State {
    tags: Array<string>;
}
interface Props {
    onTagSearch: (tagName: string) => void;
}

export default class TagBox extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            tags: [],
        } as {
            tags: Array<string>;
        };
    }

    componentDidMount() {
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
        this.setState({
            tags,
        });
    }

    render() {
        return <TagBoxComponent onTagSearch={this.props.onTagSearch} tags={this.state.tags} />;
    }
}
