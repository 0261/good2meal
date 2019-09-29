import React, { useCallback } from 'react';
import { Input, Icon, Row } from 'antd';

import styles from './SearchBox.scss';

interface Props {
    onInputSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<Props> = ({ onInputSearch }) => {
    return (
        <Row>
            <Input
                prefix={<Icon type='search' className={styles.SearchBoxIcon} />}
                size='large'
                placeholder='식당명 / 음식종류'
                className={styles.SearchBox}
                onPressEnter={onInputSearch}
            />
        </Row>
    );
};

export default SearchBox;
