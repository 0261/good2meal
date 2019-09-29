import React, { useCallback } from 'react';
import { Input, Icon, Row } from 'antd';

import styles from './SearchBox.scss';

const SearchBox = () => {
    const onInputSearch = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            const input = event.currentTarget.value;
            console.log(input);
        },
        [],
    );

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
