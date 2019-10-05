import React from 'react';

import TagBoxComponent from '../../components/TagBox/TagBox';

interface Props {
    onTagSearch: (tagName: string) => void;
    tags: Array<string>;
}

const TagBox: React.FC<Props> = ({onTagSearch, tags}) => {
    return <TagBoxComponent onTagSearch={onTagSearch} tags={tags} />;
};

export default TagBox;
