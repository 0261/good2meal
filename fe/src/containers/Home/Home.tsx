import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../store/modules';
import { restaurantSearch } from '../../store/restaurants/search';
import { tagSearch } from '../../store/tags/search';
import HomeComponent from '../../components/Home/Home';

interface Search {
    lastKey?: string | number;
    filter?: string;
}
interface Restaurant {
    imgUrl: string;
    alt: string;
    title: string;
    desc: string;
}
interface Props {
    tags: Array<string>;
    restaurants: Array<Restaurant>;
    restaurantSearch: (params: Search) => void;
    tagSearch: (tagName: string) => void;
}

const Home: React.FC<Props> = props => {
    const [loading, setLoading] = useState(false);
    const onInputSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value;
        props.restaurantSearch({
            filter: input,
        });
    };
    const onTagSearch = (
        event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    ) => {
        const tagName = event.currentTarget.innerText;
        props.tagSearch(tagName);
    };
    return (
        <HomeComponent
            onSearch={onInputSearch}
            restaurants={props.restaurants}
            tags={props.tags}
            onTagSearch={onTagSearch}
            loading={loading}
            onLoading={setLoading}
        />
    );
};

const mapStateToProps = (state: AppState) => ({
    tags: state.tag.tags,
    restaurants: state.restaurant.restaurants,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    restaurantSearch: (params: Search) => dispatch(restaurantSearch(params)),
    tagSearch: (tagName: string) => dispatch(tagSearch(tagName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
