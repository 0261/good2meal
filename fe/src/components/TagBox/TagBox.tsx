import React, { useCallback } from 'react';
import { Tag, Row } from 'antd';

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
    return <Row className={styles.TagBox}>{testTags}</Row>;
};

export default TagBox;
