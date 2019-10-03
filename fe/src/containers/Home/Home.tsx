import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import HomeComponent from '../../components/Home/Home';
import { AppState } from '../../store/modules';
import { retaurantSearch } from '../../store/restaurants/search';

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
interface State {
    loading: boolean;
}
interface Props {
    restaurants: Array<Restaurant>;
    restaurantSearch: (params: Search) => void;
}

class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    onLoading = (loading: boolean) => {
        this.setState({ loading });
        new Promise(resolve => setTimeout(resolve, 800)).then(() => {
            this.props.restaurantSearch({});
            this.setState({
                loading: !loading,
            });
        });
    }

    onInputSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value;
        this.props.restaurantSearch({
            filter: input,
        });
    }

    onTagSearch = (tagName: string) => {
        this.props.restaurantSearch({
            filter: tagName,
        });
    }

    componentDidMount() {
        new Promise(resolve => setTimeout(resolve, 800)).then(() =>
            this.setState({
                loading: !this.state.loading,
            }),
        );
    }
    render() {
        return (
            <HomeComponent
                onLoading={this.onLoading}
                restaurants={this.props.restaurants}
                onSearch={this.onInputSearch}
                onTagSearch={this.onTagSearch}
                loading={this.state.loading}
            />
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        restaurants: state.restaurant.restaurants,
    };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        restaurantSearch: (params: Search) => dispatch(retaurantSearch(params)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
