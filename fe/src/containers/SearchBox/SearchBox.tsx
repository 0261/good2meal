import React, { Component } from 'react';

import SearchBoxComponent from '../../components/SearchBox/SearchBox';

interface State {}
interface Props {}

export default class SearchBox extends Component<State, Props> {
    onInputSearch(event: React.KeyboardEvent<HTMLInputElement>) {
        const input = event.currentTarget.value;
        console.log(input);
    }

    render() {
        return <SearchBoxComponent onInputSearch={this.onInputSearch} />;
    }
}
