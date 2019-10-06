import React from 'react';

import TagBoxComponent from '../../components/TagBox/TagBox';

interface Props {
    onTagSearch: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    tags: Array<string>;
}

const TagBox: React.FC<Props> = ({ onTagSearch, tags }) => {
    return <TagBoxComponent onTagSearch={onTagSearch} tags={tags} />;
};

export default TagBox;
