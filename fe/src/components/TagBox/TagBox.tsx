import React, { useCallback, useState } from 'react';
import { Tag, Row, Skeleton } from 'antd';

import styles from './TagBox.scss';

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

const TagBox: React.FC = () => {
    const [loading, setLoading] = useState(true);

    new Promise(resolve => setTimeout(resolve, 700)).then(() =>
        setLoading(false),
    );
    const onTagSearch = useCallback(
        (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            const color = event.currentTarget.innerText;
            console.log(color);
        },
        [],
    );
    const testTags = tags.map((tag, i) => (
        <span className={styles.TagWrap} key={i} onClick={onTagSearch}>
            <Tag className={styles.Tag} color={tag}>
                {tag}
            </Tag>
        </span>
    ));
    return (
        <Skeleton loading={loading} paragraph={{ rows: 0 }} active>
            <Row className={styles.TagBox}>{testTags}</Row>
        </Skeleton>
    );
};

export default TagBox;
