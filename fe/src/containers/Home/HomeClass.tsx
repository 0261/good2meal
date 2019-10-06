// import React, { Component } from 'react';
// import { Dispatch } from 'redux';
// import { connect } from 'react-redux';

// import HomeComponent from '../../components/Home/Home';
// import { AppState } from '../../store/modules';
// import { restaurantSearch } from '../../store/restaurants/search';
// import { tagSearch } from '../../store/tags/search';

// interface Search {
//     lastKey?: string | number;
//     filter?: string;
// }
// interface Restaurant {
//     imgUrl: string;
//     alt: string;
//     title: string;
//     desc: string;
// }
// interface State {
//     loading: boolean;
// }
// interface Props {
//     tags: Array<string>;
//     restaurants: Array<Restaurant>;
//     restaurantSearch: (params: Search) => void;
// }

// class Home extends Component<Props, State> {
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             loading: true,
//         };
//     }

//     onLoading = (loading: boolean) => {
//         this.setState({ loading });
//         new Promise(resolve => setTimeout(resolve, 800)).then(() => {
//             this.props.restaurantSearch({});
//             this.setState({
//                 loading: !loading,
//             });
//         });
//     };

//     onInputSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
//         const input = event.currentTarget.value;
//         this.props.restaurantSearch({
//             filter: input,
//         });
//     };

//     onTagSearch = (tagName: string) => {
//         this.props.restaurantSearch({
//             filter: tagName,
//         });
//     };

//     componentDidMount() {
//         new Promise(resolve => setTimeout(resolve, 800)).then(() =>
//             this.setState({
//                 loading: !this.state.loading,
//             }),
//         );
//     }
//     render() {
//         return (
//             <HomeComponent
//                 onLoading={this.onLoading}
//                 restaurants={this.props.restaurants}
//                 tags={this.props.tags}
//                 onSearch={this.onInputSearch}
//                 onTagSearch={this.onTagSearch}
//                 loading={this.state.loading}
//             ></HomeComponent>
//         );
//     }
// }

// const mapStateToProps = (state: AppState) => {
//     return {
//         tags: state.tag.tags,
//         restaurants: state.restaurant.restaurants,
//     };
// };
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         restaurantSearch: (params: Search) =>
//             dispatch(restaurantSearch(params)),
//         tagSearch: (tagName: string) => dispatch(tagSearch(tagName)),
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Home);
