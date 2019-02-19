import React, { Component } from 'react';
import { Route } from "react-router-dom";

import DropDown from '../../components/DropDown/index.js';
import PeriodRange from '../../components/PeriodRange/index.js';
import DetailsScreen from './details/index.js';
import ArticleList from './components/ArticleList/index.js';

import { getArticles } from '../../services/api.js';



let sectionEntries = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'national', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 'tmagazine', 'travel', 'upshot', 'world'];

const sectionOptions = sectionEntries.map(item => {
    return {
        label: item[0].toUpperCase() + item.slice(1),
        value: item
    }
});

sectionOptions.splice(0, 0, { label: 'All', value: 'all-sections' });

const periodOptions = [
    { label: 'today', value: '1' },
    { label: 'week', value: '7' },
    { label: 'month', value: '30' }
];

class ArticlesScreen extends Component {
    constructor() {
        super();

        this.state = {
            activeSection: sectionOptions[0],
            activePeriod: periodOptions[0],
            activeArticleData: null,

            searchOffset: 0,
            fetchingArticles: true,
            fetchingArticlesError: false,
            articleEntries: null,

            fetchingMoreArticles: false,
            fetchingMoreArticlesError: false
        }

        

        this.sectionChangeHandler = this.sectionChangeHandler.bind(this);
        this.periodChangeHandler = this.periodChangeHandler.bind(this);

        this.selectArticleHandler = this.selectArticleHandler.bind(this);
        this.retryFetchingHandler = this.retryFetchingHandler.bind(this);

        this.loadMoreArticlesHandler = this.loadMoreArticlesHandler.bind(this);
        this.fetchMoreArticles = this.fetchMoreArticles.bind(this);
    }

    componentDidMount() {
        this.fetchArticles();
    }

    componentDidUpdate(prevProps) {
        let previousLocation = prevProps.location.pathname;
        let currentLocation = this.props.location.pathname;

        if (previousLocation === '/articles/details' && currentLocation === '/articles') {
            this.setState({ activeArticleData: null });
        }
    }

    render() {

        return (
            <div className="ArticlesScreen">

                <div className="side_content">

                    <div className="header">

                        <div>
                            <div className="title">TOP STORIES</div>

                            <div className="controls">

                                <div className="period_container">
                                    <PeriodRange
                                        value={this.state.activePeriod}
                                        options={periodOptions}
                                        onChange={this.periodChangeHandler}
                                    />
                                </div>

                                <div className="section_container">
                                    <DropDown
                                        value={this.state.activeSection}
                                        options={sectionOptions}
                                        onChange={this.sectionChangeHandler}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="articles_container">
                        <ArticleList
                            loading={this.state.fetchingArticles}
                            errorLoading={this.state.fetchingArticlesError}
                            data={this.state.articleEntries}

                            selectArticleHandler={this.selectArticleHandler}
                            activeArticleData={this.state.activeArticleData}
                            retryButtonHandler={this.retryFetchingHandler}
                            loadMoreClickHandler={this.loadMoreArticlesHandler}
                            fetchingMoreArticles={this.state.fetchingMoreArticles}
                        />
                    </div>
                </div>


                <div className="details_content">
                    <Route
                        path={this.props.match.url + '/details'}
                        render={(props) => <DetailsScreen {...props} articleData={this.state.activeArticleData} />}
                    />

                    <div className="details_placeholder">
                        <div className="header"></div>
                        <div className="placeholder">Select an article to view</div>
                    </div>
                </div>


            </div>
        );
    }

    sectionChangeHandler(value) {
        this.setState({
            activeSection: value,
            fetchingArticles: true
        }, () => {
            this.fetchArticles();
        });

    }

    periodChangeHandler(value) {
        this.setState({
            activePeriod: value,
            fetchingArticles: true
        }, () => {
            this.fetchArticles();
        });
    }


    selectArticleHandler(value) {

        this.setState({ activeArticleData: value })

        if (this.props.location.pathname !== '/articles/details') {
            this.props.history.push('/articles/details');
        }
    }

    retryFetchingHandler() {
        this.setState({ fetchingArticles: true }, () => {
            this.fetchArticles();
        });
    }

    loadMoreArticlesHandler() {
        this.setState({ fetchingMoreArticles: true }, () => {
            this.fetchMoreArticles()
        });
    }

    async fetchMoreArticles() {

        let { activeSection, activePeriod, searchOffset, articleEntries } = this.state;
        let result, error = null;

        try {

            let normalizedOffset = Math.ceil(searchOffset / 20) * 20; 
            
            result = await getArticles({
                section: activeSection.value,
                period: activePeriod.value,
                offset: normalizedOffset
            });

            error = false;
            articleEntries = articleEntries.concat(result.data.results);

            let resultCount = result.data.results.length;
            searchOffset += resultCount;
            
        } catch (e) {
            error = true;
        }

        this.setState({
            fetchingMoreArticles: false,
            fetchingMoreArticlesError: error,
            articleEntries: articleEntries,
            searchOffset: searchOffset
        });
    }

    async fetchArticles() {

        let { activeSection, activePeriod, searchOffset } = this.state;

        let result, error, articleEntries = null;

        try {

            result = await getArticles({
                section: activeSection.value,
                period: activePeriod.value,
                offset: 0
            });

            error = false;
            articleEntries = result.data.results;

            let resultCount = result.data.results.length;
            searchOffset = resultCount;

        } catch (e) {
            error = true;
            articleEntries = null;
        }


        this.setState({
            fetchingArticles: false,
            fetchingArticlesError: error,
            articleEntries: articleEntries,
            searchOffset: searchOffset
        });
    }
}

export default ArticlesScreen;

