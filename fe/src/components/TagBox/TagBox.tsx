import React, { useCallback, useState } from 'react';
import { Tag, Row, Skeleton } from 'antd';

import styles from './TagBox.scss';

interface Props {
    tags: Array<string>;
    onTagSearch: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const TagBox: React.FC<Props> = ({ tags, onTagSearch }) => {
    const [loading, setLoading] = useState(true);

    new Promise(resolve => setTimeout(resolve, 700)).then(() =>
        setLoading(false),
    );
    const tag = tags.map((tag, i) => (
        <span className={styles.TagWrap} key={i} onClick={e => onTagSearch(e)}>
            <Tag className={styles.Tag} color={tag}>
                {tag}
            </Tag>
        </span>
    ));
    return (
        <Skeleton loading={loading} paragraph={{ rows: 0 }} active>
            <Row className={styles.TagBox}>{tag}</Row>
        </Skeleton>
    );
};

export default TagBox;
