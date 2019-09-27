import React from 'react';
import { Input, Icon, Row } from 'antd';

import styles from './SearchBox.scss';

const SearchBox = () => {
    return (
        <Row>
            <Input
                prefix={<Icon type='search' className={styles.SearchBoxIcon} />}
                size='large'
                placeholder='식당명 / 음식종류'
                className={styles.SearchBox}
            />
        </Row>
    );
};

export default SearchBox;
