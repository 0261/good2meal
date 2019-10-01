import React, { useCallback, useState } from 'react';
import { Tag, Row, Skeleton } from 'antd';

import styles from './TagBox.scss';

interface Props {
    tags: Array<string>;
    onTagSearch: (tagName: string) => void;
}

const TagBox: React.FC<Props> = ({ tags, onTagSearch }) => {
    const [loading, setLoading] = useState(true);

    new Promise(resolve => setTimeout(resolve, 700)).then(() =>
        setLoading(false),
    );
    const onSearch = useCallback(
        (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            const tagName = event.currentTarget.innerText;
            onTagSearch(tagName);
        },
        [],
    );
    const testTags = tags.map((tag, i) => (
        <span className={styles.TagWrap} key={i} onClick={onSearch}>
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
