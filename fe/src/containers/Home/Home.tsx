import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

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
    display: string;
    tel: string;
    category: Array<string>;
    context: Array<string>;
}
interface Props {
    tags: Array<string>;
    restaurantSearch: (params: Search) => void;
    tagSearch: (tagName: string) => void;
}

const Home: React.FC<Props> = props => {
    const [loading, setLoading] = useState(false);
    const [restaurant, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post('http://localhost:4000/graphql', {
                query: `
                {
                    GetRestaurants {
                        restaurantId
                        location
                        rank
                        tel
                        name
                        display
                        telDisplay
                        roadAddress
                        category
                        menuInfo
                        bizhourInfo
                        context
                        address
                        sortKey
                    }
                }`,
            });
            const { GetRestaurants } = result.data.data;
            setRestaurants(GetRestaurants);
        };
        fetchData();
    }, []);

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
            restaurants={restaurant}
            tags={props.tags}
            onTagSearch={onTagSearch}
            loading={loading}
            onLoading={setLoading}
        />
    );
};

const mapStateToProps = (state: AppState) => ({
    tags: state.tag.tags,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    restaurantSearch: (params: Search) => dispatch(restaurantSearch(params)),
    tagSearch: (tagName: string) => dispatch(tagSearch(tagName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
