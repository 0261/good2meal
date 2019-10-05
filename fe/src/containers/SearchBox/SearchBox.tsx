import React from 'react';

import SearchBoxComponent from '../../components/SearchBox/SearchBox';

interface Props {
    onSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<Props> = ({onSearch}) => {
    return (
        <SearchBoxComponent onInputSearch={onSearch} />
    );
};

export default SearchBox;
