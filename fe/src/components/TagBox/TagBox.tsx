import React from 'react';
import { Tag, Row } from 'antd';

import styles from './TagBox.scss';

const TagBox: React.FC = () => {
    return (
        <Row className={styles.TagBox}>
            <span className={styles.TagWrap}>
                <Tag className={styles.Tag} color='magenta'>
                    magenta
                </Tag>
            </span>
            <span className={styles.TagWrap}>
                <Tag className={styles.Tag} color='red'>
                    red
                </Tag>
            </span>
            <span className={styles.TagWrap}>
                <Tag className={styles.Tag} color='volcano'>
                    volcano
                </Tag>
            </span>
            <span className={styles.TagWrap}>
                <Tag className={styles.Tag} color='orange'>
                    orange
                </Tag>
            </span>
            <span className={styles.TagWrap}>
                <Tag className={styles.Tag} color='gold'>
                    gold
                </Tag>
            </span>
            <span className={styles.TagWrap}>
                <Tag className={styles.Tag} color='lime'>
                    lime
                </Tag>
            </span>
            <span className={styles.TagWrap}>
                <Tag className={styles.Tag} color='green'>
                    green
                </Tag>
            </span>
            <span className={styles.TagWrap}>
                <Tag className={styles.Tag} color='cyan'>
                    cyan
                </Tag>
            </span>
            <span className={styles.TagWrap}>
                <Tag className={styles.Tag} color='blue'>
                    blue
                </Tag>
            </span>
            <span className={styles.TagWrap}>
                <Tag className={styles.Tag} color='geekblue'>
                    geekblue
                </Tag>
            </span>
            <span className={styles.TagWrap}>
                <Tag className={styles.Tag} color='purple'>
                    purple
                </Tag>
            </span>
        </Row>
    );
};

export default TagBox;
