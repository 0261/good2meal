import React, { Component } from 'react';

import SearchBoxComponent from '../../components/SearchBox/SearchBox';

interface State {}
interface Props {
    onSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

class SearchBox extends Component<Props, State> {
    render() {
        return <SearchBoxComponent onInputSearch={this.props.onSearch} />;
    }
}

export default SearchBox;
